import { Op } from 'sequelize'
import { DeviceModel } from '../../../Device/infrastructure/sequelize/DeviceSchema'
import { CacheService } from '../../../../Shared/domain/CacheService'
import { MainCategoryList } from '../../../../Category/MainCategory/domain/MainCategory'
import { StatusList } from '../../../Status/domain/StatusList'
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
	constructor(private readonly cache: CacheService) {}

	/**
	 * @method run
	 * @description Retrieves the total count of financial printers.
	 * @returns {Promise<number>} A promise that resolves to the total count of financial printers.
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
								mainCategoryId: MainCategoryList.FINANTIALPRINTER
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
