import { TimeTolive } from '../../../Shared/domain/CacheRepository'
import { HistoryModel } from './HistorySchema'
import { SequelizeCriteriaConverter } from '../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { HistoryAssociation } from './HistoryAssociation'
import { type CacheService } from '../../../Shared/domain/CacheService'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type HistoryDto, type HistoryPrimitives } from '../../domain/History.dto'
import { type HistoryRepository } from '../../domain/HistoryRepository'

/**
 * @class SequelizeHistoryRepository
 * @extends SequelizeCriteriaConverter
 * @implements {HistoryRepository}
 * @description Concrete implementation of the HistoryRepository using Sequelize.
 * Handles data persistence for History entities, including caching mechanisms.
 */
export class SequelizeHistoryRepository extends SequelizeCriteriaConverter implements HistoryRepository {
	private readonly cacheKey: string = 'histories'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
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
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			criteria,
			ex: TimeTolive.SHORT,
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
		// Invalidate all cache entries related to histories.
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
	}
}
