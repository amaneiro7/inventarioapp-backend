import { Op } from 'sequelize'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { CacheService } from '../../../../Shared/domain/CacheService'
import { DeviceModel } from '../../../Device/infrastructure/sequelize/DeviceSchema'
import { StatusList } from '../../../Status/domain/StatusList'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { type TotalCountByCategoryRepository } from '../../domain/TotalCountByCategoryRepository'
import { MainCategoryList } from '../../../../Category/MainCategory/domain/MainCategory'

export class SequelizeTotalCountByCategoryRepository implements TotalCountByCategoryRepository {
	private readonly cacheKey: string = 'totalCountByCategory'
	constructor(private readonly cache: CacheService) {}
	async run(): Promise<{}> {
		return await this.cache.getCachedData({
			cacheKey: `${this.cacheKey}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const categories = await DeviceModel.findAll({
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
				})
				return categories.map((category: any) => ({
					name: category.name,
					count: Number(category.count)
				}))
			}
		})
	}
}
