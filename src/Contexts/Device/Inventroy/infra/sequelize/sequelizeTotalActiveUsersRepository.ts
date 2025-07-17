import { CacheService } from '../../../../Shared/domain/CacheService'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { EmployeeModel } from '../../../../employee/Employee/infrastructure/sequelize/EmployeeSchema'
import { type TotalActiveUsersRepository } from '../../domain/TotalActiveUsersRepository'

/**
 * @class SequelizeTotalActiveUsersRepository
 * @implements {TotalActiveUsersRepository}
 * @description Concrete implementation of the TotalActiveUsersRepository using Sequelize.
 * Provides the total count of active employees (isStillWorking: true).
 * Utilizes caching for improved performance.
 */
export class SequelizeTotalActiveUsersRepository implements TotalActiveUsersRepository {
	private readonly cacheKey: string = 'totalActiveUsers'
	constructor(private readonly cache: CacheService) {}

	/**
	 * @method run
	 * @description Retrieves the total count of active users.
	 * @returns {Promise<number>} A promise that resolves to the total count of active users.
	 */
	async run(): Promise<number> {
		return await this.cache.getCachedData<number>({
			cacheKey: this.cacheKey,
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
