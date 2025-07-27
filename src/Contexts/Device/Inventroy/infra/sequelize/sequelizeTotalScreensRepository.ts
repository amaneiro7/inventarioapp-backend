import { Op } from 'sequelize'
import { DeviceModel } from '../../../Device/infrastructure/sequelize/DeviceSchema'
import { CacheService } from '../../../../Shared/domain/CacheService'
import { MainCategoryList } from '../../../../Category/MainCategory/domain/MainCategory'
import { StatusList } from '../../../Status/domain/StatusList'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type TotalScreensRepository } from '../../domain/TotalScreensRepository'

/**
 * @class SequelizeTotalScreensRepository
 * @implements {TotalScreensRepository}
 * @description Concrete implementation of the TotalScreensRepository using Sequelize.
 * Provides the total count of screens (devices with MainCategoryList.SCREENS) that are not in a 'DESINCORPORADO' status.
 * Utilizes caching for improved performance.
 */
export class SequelizeTotalScreensRepository implements TotalScreensRepository {
	private readonly cacheKey: string = 'totalScreens'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		this.cache = cache
	}

	/**
	 * @method run
	 * @description Retrieves the total count of screens.
	 * @returns {Promise<number>} A promise that resolves to the total count of screens.
	 */
	async run(): Promise<number> {
		return await this.cache.getCachedData<number>({
			cacheKey: this.cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				return await DeviceModel.count({
					include: [
						{
							association: 'category',
							attributes: [],
							where: {
								mainCategoryId: MainCategoryList.SCREENS
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
