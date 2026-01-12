import { TimeTolive } from '../../../Shared/domain/CacheRepository'
import { HistoryModel } from './HistorySchema'
import { SequelizeCriteriaConverter } from '../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { HistoryAssociation } from './HistoryAssociation'
import { GenericCacheInvalidator } from '../../../Shared/infrastructure/cache/GenericCacheInvalidator'
import { type CacheService } from '../../../Shared/domain/CacheService'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type HistoryDto, type HistoryPrimitives } from '../../domain/entity/History.dto'
import { type HistoryRepository } from '../../domain/repository/HistoryRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type HistoryId } from '../../domain/valueObject/HistoryId'
import { type CacheInvalidator } from '../../../Shared/domain/repository/CacheInvalidator'

/**
 * @class SequelizeHistoryRepository
 * @extends SequelizeCriteriaConverter
 * @implements {HistoryRepository}
 * @description Concrete implementation of the HistoryRepository using Sequelize.
 * Handles data persistence for History entities, including caching mechanisms.
 */
export class SequelizeHistoryRepository
	extends SequelizeCriteriaConverter
	implements HistoryRepository, CacheInvalidator
{
	private readonly cacheKey: string = 'histories'
	private readonly cache: CacheService
	private readonly cacheInvalidator: GenericCacheInvalidator
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
		this.cacheInvalidator = new GenericCacheInvalidator(cache, this.cacheKey)
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of History entities based on the provided criteria.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<HistoryDto>>} A promise that resolves to a paginated response containing History DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<HistoryDto>> {
		const options = this.convert(criteria)
		const opt = HistoryAssociation.converFilter(criteria, options)
		return await this.cache.getCachedData<ResponseDB<HistoryDto>>({
			cacheKey: `${this.cacheKey}:lists:${criteria.hash()}`,
			criteria,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const { count, rows } = await HistoryModel.findAndCountAll(opt)
				return {
					total: count,
					data: rows.map(row => row.get({ plain: true }))
				} as ResponseDB<HistoryDto>
			}
		})
	}

	/**
	 * @method save
	 * @description Saves a History entity to the data store. This method handles creation.
	 * Invalidates relevant cache entries after a successful operation.
	 * @param {HistoryPrimitives} payload - The History data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 */
	async save(payload: HistoryPrimitives): Promise<void> {
		await HistoryModel.create(payload)
	}

	/**
	 * @method invalidateHistoryCache
	 * @description Invalidates all histories-related cache entries.
	 * Implements HistoryCacheInvalidator interface.
	 */
	async invalidate(params?: Primitives<HistoryId> | Record<string, string>): Promise<void> {
		await this.cacheInvalidator.invalidate(params)
	}
}
