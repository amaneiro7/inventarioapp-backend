import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { ShipmentDeviceModel } from '../../../ShipmentDevice/infrastructure/Sequelize/ShipmentDeviceSchema'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { ShipmentModel } from './ShipmentSchema'
import { ShipmentAssociation } from './ShipmentAssociation'
import { type Shipment } from '../../domain/entity/Shipment'
import { type ShipmentRepository } from '../../domain/repository/ShipmentRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type ShipmentDto } from '../../domain/entity/Shipment.dto'
import { type ShipmentCacheInvalidator } from '../../domain/repository/ShipmentCacheInvalidator'
import { type ShipmentId } from '../../domain/valueObject/ShipmentId'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'

export class SequelizeShipmentRepository
	extends SequelizeCriteriaConverter
	implements ShipmentRepository, ShipmentCacheInvalidator
{
	private readonly cacheKeyPrefix = 'shipments'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	async findLast(): Promise<ShipmentDto | null> {
		const lastShipment = await ShipmentModel.findOne({
			order: [['createdAt', 'DESC']]
		})

		return lastShipment ? (lastShipment.get({ plain: true }) as ShipmentDto) : null
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<ShipmentDto>> {
		const sequelizeOptions = this.convert(criteria)
		const opt = ShipmentAssociation.converFilter(criteria, sequelizeOptions)

		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<ShipmentDto>>({
			cacheKey,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const { count, rows } = await ShipmentModel.findAndCountAll({
					...opt,
					distinct: true
				})
				return {
					total: count,
					data: rows.map(row => row.get({ plain: true }))
				} as unknown as ResponseDB<ShipmentDto>
			}
		})
	}

	async findById(id: string): Promise<ShipmentDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`
		return this.cache.getCachedData<ShipmentDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const shipment = await ShipmentModel.findByPk(id, {
					include: [
						{
							association: 'fromUser',
							attributes: ['id', 'employeeId'],
							include: [
								{
									association: 'employee',
									attributes: ['name', 'lastName', 'userName', 'email']
								}
							]
						},
						{
							association: 'toEmployee',
							attributes: ['name', 'lastName']
						},
						{
							association: 'originLocation',
							attributes: ['name', 'address']
						},
						{
							association: 'destinationLocation',
							attributes: ['name', 'address']
						},

						'shipmentDevice'
					]
				})
				return shipment ? (shipment.get({ plain: true }) as ShipmentDto) : null
			}
		})
	}

	async save(shipment: Shipment): Promise<void> {
		const shipmentPrimitives = shipment.toPrimitives()
		const devicePrimitives = shipment.shipmentDevicePrimitives

		const t = await ShipmentModel.sequelize?.transaction()
		try {
			await ShipmentModel.upsert(shipmentPrimitives, { transaction: t })
			// Borrar los antiguos para simplificar (o hacer un diff si se require optimizacion)
			await ShipmentDeviceModel.destroy({
				where: {
					shipmentId: shipment.idValue
				},
				transaction: t
			})
			// Crear los nuevos
			await ShipmentDeviceModel.bulkCreate(devicePrimitives, {
				transaction: t
			})

			await t?.commit()
		} catch (error) {
			await t?.rollback()
			throw error
		}
	}

	async remove(id: string): Promise<void> {
		await ShipmentModel.destroy({ where: { id } })
	}

	async invalidateShipmentCache(id: Primitives<ShipmentId>): Promise<void> {
		const promises: Array<Promise<void>> = []
		// Invalida todos los resultados de listas/búsquedas.
		// Esto es necesario porque un cambio en un item puede afectar a cualquier lista paginada o filtrada.
		promises.push(this.cache.removeCachedData({ cacheKey: `${this.cacheKeyPrefix}*` }))
		promises.push(this.cache.removeCachedData({ cacheKey: `${this.cacheKeyPrefix}:id:${id}` }))
		await Promise.all(promises)
	}
}
