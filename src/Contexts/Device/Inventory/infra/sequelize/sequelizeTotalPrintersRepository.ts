import { Op } from 'sequelize'
import { DeviceModel } from '../../../Device/infrastructure/sequelize/schema/DeviceSchema'
import { CacheService } from '../../../../Shared/domain/CacheService'
import { MainCategoryList } from '../../../../Category/MainCategory/domain/MainCategoryDefaultData'
import { StatusOptions } from '../../../Status/domain/StatusOptions'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type TotalPrintersRepository } from '../../domain/TotalPrintersRepository'

/**
 * @class SequelizeTotalPrintersRepository
 * @implements {TotalPrintersRepository}
 * @description Concrete implementation of the TotalPrintersRepository using Sequelize.
 * Provides the total count of printers (devices with MainCategoryList.PRINTERS) that are not in a 'DESINCORPORADO' status.
 * Utilizes caching for improved performance.
 */
export class SequelizeTotalPrintersRepository implements TotalPrintersRepository {
	private readonly cacheKey: string = 'totalPrinters'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		this.cache = cache
	}

	/**
	 * @method run
	 * @description Retrieves the total count of printers.
	 * @returns {Promise<number>} A promise that resolves to the total count of printers.
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
								mainCategoryId: MainCategoryList.PRINTERS
							}
						},
						{
							association: 'status',
							attributes: [],
							where: {
								[Op.not]: {
									id: StatusOptions.DESINCORPORADO
								}
							}
						}
					]
				})
			}
		})
	}
}
