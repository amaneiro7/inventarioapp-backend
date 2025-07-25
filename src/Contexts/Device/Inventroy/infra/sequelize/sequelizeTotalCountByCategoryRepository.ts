import { Op } from 'sequelize'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { CacheService } from '../../../../Shared/domain/CacheService'
import { DeviceModel } from '../../../Device/infrastructure/sequelize/DeviceSchema'
import { StatusList } from '../../../Status/domain/StatusList'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { type TotalCountByCategoryRepository } from '../../domain/TotalCountByCategoryRepository'
import { MainCategoryList } from '../../../../Category/MainCategory/domain/MainCategory'

// Interface for the raw data returned from the Sequelize query
interface RawCategoryCountData {
	name: string
	count: string | number
}

/**
 * @class SequelizeTotalCountByCategoryRepository
 * @implements {TotalCountByCategoryRepository}
 * @description Concrete implementation of the TotalCountByCategoryRepository using Sequelize.
 * Provides the total count of devices grouped by category, excluding 'PARTS' and 'DESINCORPORADO' status.
 * Utilizes caching for improved performance.
 */
export class SequelizeTotalCountByCategoryRepository implements TotalCountByCategoryRepository {
	private readonly cacheKey: string = 'totalCountByCategory'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		this.cache = cache
	}

	/**
	 * @method run
	 * @description Retrieves the total count of devices grouped by category.
	 * @returns {Promise<Array<{ name: string; count: number }>>} A promise that resolves to an array of objects
	 * representing category names and their respective device counts.
	 */
	async run(): Promise<Array<{ name: string; count: number }>> {
		return await this.cache.getCachedData<Array<{ name: string; count: number }>>({
			cacheKey: this.cacheKey,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const categories = (await DeviceModel.findAll({
					attributes: [
						[sequelize.col('category.name'), 'name'],
						[sequelize.fn('COUNT', sequelize.col('*')), 'count']
					],
					include: [
						{
							association: 'category',
							attributes: [],
							where: {
								[Op.not]: {
									mainCategoryId: MainCategoryList.PARTS
								}
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
					],
					group: ['category.name'],
					order: [[sequelize.col('count'), 'DESC']],
					raw: true
				})) as unknown as RawCategoryCountData[]
				return categories.map(category => ({
					name: category.name,
					count: Number(category.count)
				}))
			}
		})
	}
}
