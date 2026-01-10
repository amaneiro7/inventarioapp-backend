import { LocationModel } from '../../../../Location/Location/infrastructure/sequelize/LocationSchema'
import { CacheService } from '../../../../Shared/domain/CacheService'
import { TypeOfSiteList } from '../../../../Location/TypeOfSite/domain/TypeOfSiteList'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type TotalAgenciesRepository } from '../../domain/TotalAgenciesRepository'
import { LocationStatusOptions } from '../../../../Location/LocationStatus/domain/LocationStatusOptions'

/**
 * @class SequelizeTotalAgenciesRepository
 * @implements {TotalAgenciesRepository}
 * @description Concrete implementation of the TotalAgenciesRepository using Sequelize.
 * Provides the total count of agencies (locations with TypeOfSiteList.AGENCIA) that are operational.
 * Utilizes caching for improved performance.
 */
export class SequelizeTotalAgenciesRepository implements TotalAgenciesRepository {
	private readonly cacheKey: string = 'locations:dashboard:totalAgencies'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		this.cache = cache
	}

	/**
	 * @method run
	 * @description Retrieves the total count of agencies.
	 * @returns {Promise<number>} A promise that resolves to the total count of agencies.
	 */
	async run(): Promise<number> {
		return await this.cache.getCachedData<number>({
			cacheKey: this.cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				return await LocationModel.count({
					where: {
						typeOfSiteId: TypeOfSiteList.AGENCIA,
						locationStatusId: LocationStatusOptions.OPERATIONAL
					}
				})
			}
		})
	}
}
