import { CacheService } from '../../../../Shared/domain/CacheService'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { TypeOfSiteList } from '../../../../Location/TypeOfSite/domain/TypeOfSiteList'
import { SiteModels } from '../../../../Location/Site/infrastructure/sequelize/SiteSchema'
import { type TotalAdministrativeSitesRepository } from '../../domain/TotalAdministrativeSitesRepository'

export class SequelizeTotalAdministrativeSitesRepository implements TotalAdministrativeSitesRepository {
	private readonly cacheKey: string = 'totalAdministrativeSites'
	constructor(private readonly cache: CacheService) {}
	async run(): Promise<{}> {
		return await this.cache.getCachedData({
			cacheKey: `${this.cacheKey}`,
			ex: TimeTolive.TOO_LONG,
			fetchFunction: async () => {
				return await SiteModels.count({
					include: [
						{
							association: 'location',
							attributes: [],
							where: {
								typeOfSiteId: TypeOfSiteList.TORRE
							}
						}
					],
					distinct: true
				})
			}
		})
	}
}
