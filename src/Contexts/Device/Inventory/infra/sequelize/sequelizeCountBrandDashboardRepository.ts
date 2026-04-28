import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { fetchAndAggregateBrandData } from './dashboard/countedBrandDashboard'
import type { CacheService } from '../../../../Shared/domain/CacheService'
import type { AggregatedBrandData } from './dashboard/types'
import type { ComputerCountBrandDashboardRepository } from '../../domain/ComputerCountBrandDashboardRepository'
import type { Criteria } from '../../../../Shared/domain/criteria/Criteria'
import type { ResponseDB } from '../../../../Shared/domain/ResponseType'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { ComputerCountBrandDashboardAssociation } from './dashboard/ComputerCountBrandDashboardAssociation'

/**
 * @class SequelizeComputerDashboardRepository
 * @implements {ComputerDashboardRepository}
 * @description Provides an implementation of the `ComputerDashboardRepository` using Sequelize and a cache service.
 * This repository is responsible for fetching and aggregating computer-related dashboard data.
 */
export class SequelizeComputerCountBrandDashboardRepository
	extends SequelizeCriteriaConverter
	implements ComputerCountBrandDashboardRepository
{
	private readonly cacheKeyPrefix: string = 'devices:dashboard:computer'

	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		super()
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
		const options = this.convert(criteria)
		const deviceOptions = ComputerCountBrandDashboardAssociation.buildDashboardFindOptions(criteria, options)
		const cacheKey = `${this.cacheKeyPrefix}:count-by-brand:${criteria.hash()}`
		return await this.cache.getCachedData<ResponseDB<AggregatedBrandData>>({
			cacheKey,
			ttl: TimeTolive.MEDIUM,
			fetchFunction: async () => await fetchAndAggregateBrandData(deviceOptions)
		})
	}
}
