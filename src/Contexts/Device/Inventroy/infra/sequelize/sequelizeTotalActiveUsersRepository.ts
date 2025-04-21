import { CacheService } from '../../../../Shared/domain/CacheService'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { EmployeeModel } from '../../../../employee/Employee/infrastructure/sequelize/EmployeeSchema'
import { type TotalActiveUsersRepository } from '../../domain/TotalActiveUsersRepository'

export class SequelizeTotalActiveUsersRepository implements TotalActiveUsersRepository {
	private readonly cacheKey: string = 'totalActiveUsers'
	constructor(private readonly cache: CacheService) {}
	async run(): Promise<{}> {
		return await this.cache.getCachedData({
			cacheKey: `${this.cacheKey}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				return await EmployeeModel.count({
					where: {
						isStillWorking: true
					}
				})
			}
		})
	}
}
