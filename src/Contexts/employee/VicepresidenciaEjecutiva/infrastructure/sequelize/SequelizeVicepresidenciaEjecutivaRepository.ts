import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { DepartmentRepository } from '../../../IDepartment/DepartmentRepository'
import { DepartmentId } from '../../../IDepartment/DepartmentId'
import { DepartmentName } from '../../../IDepartment/DepartmentName'
import { VicepresidenciaEjecutivaModel } from './VicepresidenciaEjecutivaSchema'
import {
	type VicepresidenciaEjecutivaDto,
	type VicepresidenciaEjecutivaPrimitives
} from '../../domain/VicepresidenciaEjecutiva.dto'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

/**
 * @description Concrete implementation of the VicepresidenciaEjecutivaRepository using Sequelize.
 */
export class SequelizeVicepresidenciaEjecutivaRepository
	extends SequelizeCriteriaConverter
	implements DepartmentRepository<VicepresidenciaEjecutivaDto>
{
	private readonly cacheKeyPrefix = 'vicepresidenciaEjecutiva'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<VicepresidenciaEjecutivaDto>> {
		const options = this.convert(criteria)
		options.include = ['directiva']
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<VicepresidenciaEjecutivaDto>>({
			cacheKey,
			criteria,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const { rows, count } = await VicepresidenciaEjecutivaModel.findAndCountAll(options)

				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				} as ResponseDB<VicepresidenciaEjecutivaDto>
			}
		})
	}

	async findById(id: Primitives<DepartmentId>): Promise<Nullable<VicepresidenciaEjecutivaDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`

		return this.cache.getCachedData<Nullable<VicepresidenciaEjecutivaDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const vicepresidenciaEjecutiva = await VicepresidenciaEjecutivaModel.findByPk(id, {
					include: [
						{
							association: 'cargos',
							attributes: ['id', 'name'],
							through: { attributes: [] }
						},
						'employee'
					]
				})
				return vicepresidenciaEjecutiva
					? (vicepresidenciaEjecutiva.get({ plain: true }) as VicepresidenciaEjecutivaDto)
					: null
			}
		})
	}

	async findByName(name: Primitives<DepartmentName>): Promise<Nullable<VicepresidenciaEjecutivaDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:name:${name}`

		return this.cache.getCachedData<Nullable<VicepresidenciaEjecutivaDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const vicepresidenciaEjecutiva = await VicepresidenciaEjecutivaModel.findOne({ where: { name } })
				return vicepresidenciaEjecutiva
					? (vicepresidenciaEjecutiva.get({ plain: true }) as VicepresidenciaEjecutivaDto)
					: null
			}
		})
	}

	async save(payload: VicepresidenciaEjecutivaPrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			const { cargos, ...restPayload } = payload

			const [vicepresidenciaEjecutivaInstance] = await VicepresidenciaEjecutivaModel.upsert(restPayload, {
				transaction,
				returning: true
			})

			if (cargos && cargos.length > 0) {
				await vicepresidenciaEjecutivaInstance.setCargos(cargos, { transaction })
			} else if (cargos && cargos.length === 0) {
				await vicepresidenciaEjecutivaInstance.setCargos([], { transaction })
			}

			await transaction.commit()
			await this.invalidateCache(restPayload)
		} catch (error) {
			await transaction.rollback()
			throw new Error(
				`Error saving Vicepresidencia Ejecutiva: ${error instanceof Error ? error.message : String(error)}`
			)
		}
	}

	async remove(id: Primitives<DepartmentId>): Promise<void> {
		const vicepresidenciaEjecutivaToRemove = await VicepresidenciaEjecutivaModel.findByPk(id)

		await VicepresidenciaEjecutivaModel.destroy({ where: { id } })

		if (vicepresidenciaEjecutivaToRemove) {
			await this.invalidateCache(vicepresidenciaEjecutivaToRemove.get({ plain: true }))
		}
	}

	private async invalidateCache(
		vicepresidenciaEjecutivaData: Partial<VicepresidenciaEjecutivaPrimitives>
	): Promise<void> {
		const { id, name } = vicepresidenciaEjecutivaData
		const cacheKeysToRemove = [`${this.cacheKeyPrefix}*`]
		if (id) cacheKeysToRemove.push(`${this.cacheKeyPrefix}:id:${id}`)
		if (name) cacheKeysToRemove.push(`${this.cacheKeyPrefix}:name:${name}`)

		await Promise.all(cacheKeysToRemove.map(key => this.cache.removeCachedData({ cacheKey: key })))
	}
}
