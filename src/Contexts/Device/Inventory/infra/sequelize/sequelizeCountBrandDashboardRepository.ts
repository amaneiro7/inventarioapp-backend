import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { fetchAndAggregateBrandData } from './dashboard/countedBrandDashboard'
import type { CacheService } from '../../../../Shared/domain/CacheService'
import type { AggregatedBrandData } from './dashboard/types'
import type { ComputerCountBrandDashboardRepository } from '../../domain/ComputerCountBrandDashboardRepository'
import type { Criteria } from '../../../../Shared/domain/criteria/Criteria'
import type { ResponseDB } from '../../../../Shared/domain/ResponseType'

/**
 * @class SequelizeComputerDashboardRepository
 * @implements {ComputerDashboardRepository}
 * @description Provides an implementation of the `ComputerDashboardRepository` using Sequelize and a cache service.
 * This repository is responsible for fetching and aggregating computer-related dashboard data.
 */
export class SequelizeComputerCountBrandDashboardRepository implements ComputerCountBrandDashboardRepository {
	private readonly cacheKeyPrefix: string = 'devices:dashboard:computer'

	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		this.cache = cache
	}

	/**
	 * @method countByBrand
	 * @description Retrieves and aggregates the count of computers, grouped by brand, model, and type of site.
	 * The data is cached to enhance performance.
	 * @returns {Promise<AggregatedBrandData[]>} A promise that resolves to an array of aggregated brand data.
	 */
	async run(criteria: Criteria): Promise<ResponseDB<AggregatedBrandData>> {
		// Incluimos el hash del criteria para que filtros distintos tengan caches distintos
		const cacheKey = this.generateCacheKey(`count-by-brand:${criteria.hash()}`)
		return await this.cache.getCachedData<ResponseDB<AggregatedBrandData>>({
			cacheKey,
			ttl: TimeTolive.MEDIUM,
			fetchFunction: async () => await fetchAndAggregateBrandData(criteria)
		})
	}

	/**
	 * @private
	 * @method generateCacheKey
	 * @description Generates a dynamic cache key that includes a timestamp to ensure the cache is periodically refreshed.
	 * This strategy helps prevent stale data by creating a new key every hour.
	 * @param {string} suffix - A unique suffix for the cache key.
	 * @returns {string} The generated cache key.
	 */
	private generateCacheKey(suffix: string): string {
		const timestamp = Math.floor(Date.now() / (1000 * 60 * 60)) // Timestamp updated hourly
		return `${this.cacheKeyPrefix}:${suffix}:${timestamp}`
	}
}
