import { CacheService } from '../../../../Shared/domain/CacheService'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { TypeOfSiteList } from '../../../../Location/TypeOfSite/domain/TypeOfSiteList'
import { SiteModels } from '../../../../Location/Site/infrastructure/sequelize/SiteSchema'
import { LocationStatusOptions } from '../../../../Location/LocationStatus/domain/LocationStatusOptions'
import { type TotalAdministrativeSitesRepository } from '../../domain/TotalAdministrativeSitesRepository'

/**
 * @class SequelizeTotalAdministrativeSitesRepository
 * @implements {TotalAdministrativeSitesRepository}
 * @description Concrete implementation of the TotalAdministrativeSitesRepository using Sequelize.
 * Provides the total count of administrative sites (sites with TypeOfSiteList.TORRE) that are operational.
 * Utilizes caching for improved performance.
 */
export class SequelizeTotalAdministrativeSitesRepository implements TotalAdministrativeSitesRepository {
	private readonly cacheKey: string = 'locations:dashboard:totalAdministrativeSites'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		this.cache = cache
	}

	/**
	 * @method run
	 * @description Retrieves the total count of administrative sites.
	 * @returns {Promise<number>} A promise that resolves to the total count of administrative sites.
	 */
	async run(): Promise<number> {
		return await this.cache.getCachedData<number>({
			cacheKey: this.cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				return await SiteModels.count({
					include: [
						{
							association: 'location',
							attributes: [],
							where: {
								typeOfSiteId: TypeOfSiteList.TORRE,
								locationStatusId: LocationStatusOptions.OPERATIONAL
							}
						}
					],
					distinct: true
				})
			}
		})
	}
}
