import { type CentroTrabajoRepository } from '../../domain/CentroTrabajoRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type CentroTrabajoId } from '../../domain/CentroTrabajoId'
import { type CentroTrabajoName } from '../../domain/CentroTrabajoName'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { CentroTrabajoModel } from './CentroTrabajoSchema'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type CentroTrabajoDto, type CentroTrabajoPrimitives } from '../../domain/CentroTrabajo.dto'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

/**
 * @description Concrete implementation of the CentroTrabajoRepository using Sequelize.
 */
export class SequelizeCentroTrabajoRepository extends SequelizeCriteriaConverter implements CentroTrabajoRepository {
	private readonly cacheKeyPrefix = 'CentroTrabajos'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<CentroTrabajoDto>> {
		const options = this.convert(criteria)
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<CentroTrabajoDto>>({
			cacheKey,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const { count, rows } = await CentroTrabajoModel.findAndCountAll(options)
				return { data: rows.map(row => row.get({ plain: true })), total: count } as ResponseDB<CentroTrabajoDto>
			}
		})
	}

	async findById(id: Primitives<CentroTrabajoId>): Promise<Nullable<CentroTrabajoDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`

		return this.cache.getCachedData<Nullable<CentroTrabajoDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const centroTrabajo = await CentroTrabajoModel.findByPk(id)
				return centroTrabajo ? (centroTrabajo.get({ plain: true }) as CentroTrabajoDto) : null
			}
		})
	}

	async findByName(name: Primitives<CentroTrabajoName>): Promise<Nullable<CentroTrabajoDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:name:${name}`

		return this.cache.getCachedData<Nullable<CentroTrabajoDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const centroTrabajo = await CentroTrabajoModel.findOne({ where: { name } })
				return centroTrabajo ? (centroTrabajo.get({ plain: true }) as CentroTrabajoDto) : null
			}
		})
	}

	async save(payload: CentroTrabajoPrimitives): Promise<void> {
		await CentroTrabajoModel.upsert(payload)
		await this.invalidateCache(payload)
	}

	async remove(id: Primitives<CentroTrabajoId>): Promise<void> {
		const centroTrabajoToRemove = await CentroTrabajoModel.findByPk(id)

		await CentroTrabajoModel.destroy({ where: { id } })

		if (centroTrabajoToRemove) {
			await this.invalidateCache(centroTrabajoToRemove.get({ plain: true }))
		}
	}

	private async invalidateCache(centroTrabajoData: Partial<CentroTrabajoPrimitives>): Promise<void> {
		const { id, name } = centroTrabajoData
		const cacheKeysToRemove = [`${this.cacheKeyPrefix}*`]
		if (id) cacheKeysToRemove.push(`${this.cacheKeyPrefix}:id:${id}`)
		if (name) cacheKeysToRemove.push(`${this.cacheKeyPrefix}:name:${name}`)

		await Promise.all(cacheKeysToRemove.map(key => this.cache.removeCachedData({ cacheKey: key })))
	}
}
