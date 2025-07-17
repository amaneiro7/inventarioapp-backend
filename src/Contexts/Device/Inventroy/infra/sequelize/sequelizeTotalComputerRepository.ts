import { Op } from 'sequelize'
import { DeviceModel } from '../../../Device/infrastructure/sequelize/DeviceSchema'
import { CacheService } from '../../../../Shared/domain/CacheService'
import { MainCategoryList } from '../../../../Category/MainCategory/domain/MainCategory'
import { StatusList } from '../../../Status/domain/StatusList'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type TotalComputerRepository } from '../../domain/TotalComputerRepository'

/**
 * @class SequelizeTotalComputerRepository
 * @implements {TotalComputerRepository}
 * @description Concrete implementation of the TotalComputerRepository using Sequelize.
 * Provides the total count of computers (devices with MainCategoryList.COMPUTER) that are not in a 'DESINCORPORADO' status.
 * Utilizes caching for improved performance.
 */
export class SequelizeTotalComputerRepository implements TotalComputerRepository {
	private readonly cacheKey: string = 'totalComputer'
	constructor(private readonly cache: CacheService) {}

	/**
	 * @method run
	 * @description Retrieves the total count of computers.
	 * @returns {Promise<number>} A promise that resolves to the total count of computers.
	 */
	async run(): Promise<number> {
		return await this.cache.getCachedData<number>({
			cacheKey: this.cacheKey,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				return await DeviceModel.count({
					include: [
						{
							association: 'category',
							attributes: [],
							where: {
								mainCategoryId: MainCategoryList.COMPUTER
							}
						},
						{
							association: 'status',
							attributes: [],
							where: {
								[Op.not]: {
									id: StatusList.DESINCORPORADO
								}
							}
						}
					]
				})
			}
		})
	}
}
