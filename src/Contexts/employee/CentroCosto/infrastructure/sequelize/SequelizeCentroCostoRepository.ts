import { type CentroCostoRepository } from '../../domain/CentroCostoRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type CodCentroCosto } from '../../domain/CodCentroCosto'
import { type CentroCostoName } from '../../domain/CentroCostoName'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { CentroCostoModel } from './CentroCostoSchema'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type CentroCostoPrimitives, type CentroCostoDto } from '../../domain/CentroCosto.dto'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'

/**
 * @description Concrete implementation of the CentroCostoRepository using Sequelize.
 */
export class SequelizeCentroCostoRepository extends SequelizeCriteriaConverter implements CentroCostoRepository {
	private readonly cacheKeyPrefix = 'CentroCostos'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<CentroCostoDto>> {
		const options = this.convert(criteria)
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<CentroCostoDto>>({
			cacheKey,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const { count, rows } = await CentroCostoModel.findAndCountAll(options)
				return { data: rows.map(row => row.get({ plain: true })), total: count }
			}
		})
	}

	async findById(id: Primitives<CodCentroCosto>): Promise<Nullable<CentroCostoDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`

		return this.cache.getCachedData<Nullable<CentroCostoDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const centroCosto = await CentroCostoModel.findByPk(id)
				return centroCosto ? centroCosto.get({ plain: true }) : null
			}
		})
	}

	async findByName(name: Primitives<CentroCostoName>): Promise<Nullable<CentroCostoDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:name:${name}`

		return this.cache.getCachedData<Nullable<CentroCostoDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const centroCosto = await CentroCostoModel.findOne({ where: { name } })
				return centroCosto ? centroCosto.get({ plain: true }) : null
			}
		})
	}

	async save(payload: CentroCostoPrimitives): Promise<void> {
		await CentroCostoModel.upsert(payload)
		await this.invalidateCache(payload)
	}

	async remove(id: Primitives<CodCentroCosto>): Promise<void> {
		const centroCostoToRemove = await CentroCostoModel.findByPk(id)

		await CentroCostoModel.destroy({ where: { id } })

		if (centroCostoToRemove) {
			await this.invalidateCache(centroCostoToRemove.get({ plain: true }))
		}
	}

	private async invalidateCache(centroCostoData: Partial<CentroCostoPrimitives>): Promise<void> {
		const { id, name } = centroCostoData
		const cacheKeysToRemove = [`${this.cacheKeyPrefix}*`]
		if (id) cacheKeysToRemove.push(`${this.cacheKeyPrefix}:id:${id}`)
		if (name) cacheKeysToRemove.push(`${this.cacheKeyPrefix}:name:${name}`)

		await Promise.all(cacheKeysToRemove.map(key => this.cache.removeCachedData({ cacheKey: key })))
	}
}
