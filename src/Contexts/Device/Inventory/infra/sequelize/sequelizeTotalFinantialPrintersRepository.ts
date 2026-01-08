import { Op } from 'sequelize'
import { DeviceModel } from '../../../Device/infrastructure/sequelize/schema/DeviceSchema'
import { CacheService } from '../../../../Shared/domain/CacheService'
import { MainCategoryList } from '../../../../Category/MainCategory/domain/MainCategoryDefaultData'
import { StatusOptions } from '../../../Status/domain/StatusOptions'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type TotalFinantialPrintersRepository } from '../../domain/TotalFinantialPrintersRepository'

/**
 * @class SequelizeTotalFinantialPrintersRepository
 * @implements {TotalFinantialPrintersRepository}
 * @description Concrete implementation of the TotalFinantialPrintersRepository using Sequelize.
 * Provides the total count of financial printers (devices with MainCategoryList.FINANTIALPRINTER) that are not in a 'DESINCORPORADO' status.
 * Utilizes caching for improved performance.
 */
export class SequelizeTotalFinantialPrintersRepository implements TotalFinantialPrintersRepository {
	private readonly cacheKey: string = 'totalFinantialPrinters'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		this.cache = cache
	}

	/**
	 * @method run
	 * @description Retrieves the total count of financial printers.
	 * @returns {Promise<number>} A promise that resolves to the total count of financial printers.
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
								mainCategoryId: MainCategoryList.FINANTIALPRINTER
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
