import { LocationModel } from '../../../../Location/Location/infrastructure/sequelize/LocationSchema'
import { CacheService } from '../../../../Shared/domain/CacheService'
import { TypeOfSiteList } from '../../../../Location/TypeOfSite/domain/TypeOfSiteList'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type TotalAgenciesRepository } from '../../domain/TotalAgenciesRepository'

export class SequelizeTotalAgenciesRepository implements TotalAgenciesRepository {
	private readonly cacheKey: string = 'totalAgencies'
	constructor(private readonly cache: CacheService) {}
	async run(): Promise<{}> {
		return await this.cache.getCachedData({
			cacheKey: `${this.cacheKey}`,
			ex: TimeTolive.TOO_LONG,
			fetchFunction: async () => {
				return await LocationModel.count({
					where: {
						typeOfSiteId: TypeOfSiteList.AGENCIA
					}
				})
			}
		})
	}
}
