import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoId } from '../../domain/valueObject/CargoId'
import { type CargoRepository } from '../../domain/repository/CargoRepository'
import { type CargoName } from '../../domain/valueObject/CargoName'
import { type CargoDto, type CargoPrimitives } from '../../domain/entity/Cargo.dto'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { CargoModel } from './CargoSchema'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { CargoAssociation } from './CargoAssociation'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'

/**
 * @description Concrete implementation of the CargoRepository using Sequelize.
 */
export class SequelizeCargoRepository extends SequelizeCriteriaConverter implements CargoRepository {
	private readonly cacheKeyPrefix = 'cargos'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<CargoDto>> {
		const options = this.convert(criteria)
		const opt = CargoAssociation.convertFilter(criteria, options)
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<CargoDto>>({
			cacheKey,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const { count, rows } = await CargoModel.findAndCountAll(opt)
				return { data: rows.map(row => row.get({ plain: true })), total: count } as ResponseDB<CargoDto>
			}
		})
	}

	async findById(id: Primitives<CargoId>): Promise<Nullable<CargoDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`

		return this.cache.getCachedData<Nullable<CargoDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const cargo = await CargoModel.findByPk(id, {
					include: [
						{
							association: 'departamentos',
							attributes: ['id', 'name'],
							through: { attributes: [] }
						},
						'employee'
					]
				})
				return cargo ? (cargo.get({ plain: true }) as CargoDto) : null
			}
		})
	}

	async findByName(name: Primitives<CargoName>): Promise<Nullable<CargoDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:name:${name}`

		return this.cache.getCachedData<Nullable<CargoDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const cargo = await CargoModel.findOne({ where: { name } })
				return cargo ? (cargo.get({ plain: true }) as CargoDto) : null
			}
		})
	}

	async save(payload: CargoPrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			const { departamentos, directivas, vicepresidenciasEjecutivas, vicepresidencias, ...restPayload } = payload

			const [cargoInstance] = await CargoModel.upsert(restPayload, { transaction, returning: true })

			if (departamentos) {
				await cargoInstance.setDepartamentos(departamentos, { transaction })
			}
			if (directivas) {
				await cargoInstance.setDirectivas(directivas, { transaction })
			}
			if (vicepresidenciasEjecutivas) {
				await cargoInstance.setVicepresidenciaEjecutivas(vicepresidenciasEjecutivas, { transaction })
			}
			if (vicepresidencias) {
				await cargoInstance.setVicepresidencias(vicepresidencias, { transaction })
			}

			await transaction.commit()
			await this.invalidateCache(restPayload)
		} catch (error) {
			await transaction.rollback()
			throw new Error(`Error saving Cargo: ${error instanceof Error ? error.message : String(error)}`)
		}
	}

	async remove(id: Primitives<CargoId>): Promise<void> {
		const cargoToRemove = await CargoModel.findByPk(id)

		await CargoModel.destroy({ where: { id } })

		if (cargoToRemove) {
			await this.invalidateCache(cargoToRemove.get({ plain: true }))
		}
	}

	private async invalidateCache(cargoData: Partial<CargoPrimitives>): Promise<void> {
		const { id, name } = cargoData
		const cacheKeysToRemove = [`${this.cacheKeyPrefix}*`]
		if (id) cacheKeysToRemove.push(`${this.cacheKeyPrefix}:id:${id}`)
		if (name) cacheKeysToRemove.push(`${this.cacheKeyPrefix}:name:${name}`)

		await Promise.all(cacheKeysToRemove.map(key => this.cache.removeCachedData({ cacheKey: key })))
	}
}
