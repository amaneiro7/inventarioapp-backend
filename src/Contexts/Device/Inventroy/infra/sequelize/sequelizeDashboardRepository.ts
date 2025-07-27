import { CacheService } from '../../../../Shared/domain/CacheService'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type ComputerDashboardRepository } from '../../domain/ComputerDashboardRepository'
import { fetchAndAggregateHDDData } from './dashboard/hddDashboard'
import { fetchAndProcessStatusData } from './dashboard/statusDashboard'
import { fetchAndAggregateBrandData } from './dashboard/brandDashboard'
import { type AggregatedBrandData, type AggregatedHDDData, type StatusCountData } from './dashboard/types'

/**
 * @class SequelizeComputerDashboardRepository
 * @implements {ComputerDashboardRepository}
 * @description Provides an implementation of the `ComputerDashboardRepository` using Sequelize and a cache service.
 * This repository is responsible for fetching and aggregating computer-related dashboard data.
 */
export class SequelizeComputerDashboardRepository implements ComputerDashboardRepository {
	private readonly cacheKeyPrefix: string = 'dashboard:computer'

	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		this.cache = cache
	}

	/**
	 * @method countTotalHDD
	 * @description Retrieves and aggregates the total count of computer HDDs, grouped by capacity and type.
	 * The data is cached to improve performance.
	 * @returns {Promise<AggregatedHDDData[]>} A promise that resolves to an array of aggregated HDD data.
	 */
	async countTotalHDD(): Promise<AggregatedHDDData[]> {
		const cacheKey = this.generateCacheKey('hdd')
		return await this.cache.getCachedData<AggregatedHDDData[]>({
			cacheKey,
			ex: TimeTolive.SHORT,
			fetchFunction: fetchAndAggregateHDDData
		})
	}

	/**
	 * @method countByStatus
	 * @description Retrieves the count of computers, grouped by their operational status.
	 * The data is cached for performance optimization.
	 * @returns {Promise<StatusCountData[]>} A promise that resolves to an array of status counts.
	 */
	async countByStatus(): Promise<StatusCountData[]> {
		const cacheKey = this.generateCacheKey('status')
		return await this.cache.getCachedData<StatusCountData[]>({
			cacheKey,
			ex: TimeTolive.SHORT,
			fetchFunction: fetchAndProcessStatusData
		})
	}

	/**
	 * @method countByBrand
	 * @description Retrieves and aggregates the count of computers, grouped by brand, model, and type of site.
	 * The data is cached to enhance performance.
	 * @returns {Promise<AggregatedBrandData[]>} A promise that resolves to an array of aggregated brand data.
	 */
	async countByBrand(): Promise<AggregatedBrandData[]> {
		const cacheKey = this.generateCacheKey('brand')
		return await this.cache.getCachedData<AggregatedBrandData[]>({
			cacheKey,
			ex: TimeTolive.SHORT,
			fetchFunction: fetchAndAggregateBrandData
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
