import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { CountByCategoryRepository } from '../../domain/CountByCategoryRepository'
import { DeviceModel } from '../../../Device/infrastructure/sequelize/DeviceSchema'
import { MainCategoryList } from '../../../../Category/MainCategory/domain/MainCategory'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'

export class SequelizeCountByCategoryRepository implements CountByCategoryRepository {
	private readonly cacheKey: string = 'dashboard'
	constructor(private readonly cache: CacheService) {}

	async run(): Promise<{}> {
		return await this.cache.getCachedData({
			cacheKey: `computer-category-${this.cacheKey}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const result = await DeviceModel.findAll({
					attributes: [
						[sequelize.col('category.name'), 'name'],
						[sequelize.col('location.typeOfSite.name'), 'typeOfSiteName'],
						[sequelize.fn('COUNT', sequelize.col('*')), 'count']
					],
					include: [
						{
							association: 'category',
							attributes: [],
							where: {
								mainCategoryId: MainCategoryList.COMPUTER
							}
						},
						{
							association: 'location',
							required: true,
							include: [{ association: 'typeOfSite', attributes: [] }],
							attributes: []
						}
					],
					group: ['category.name', 'location.typeOfSite.name'],
					order: [
						[sequelize.col('category.name'), 'ASC'],
						[sequelize.col('location.typeOfSite.name'), 'ASC']
					],
					raw: true
				})
				return result.reduce((acc: any[], category: any) => {
					const categoryIndex = acc.findIndex(c => c.name === category.name)

					if (categoryIndex === -1) {
						acc.push({
							name: category.name,
							count: Number(category.count),
							typeOfSite: [
								{
									name: category.typeOfSiteName,
									count: Number(category.count)
								}
							]
						})
					} else {
						acc[categoryIndex].count += Number(category.count)
						acc[categoryIndex].typeOfSite.push({
							name: category.typeOfSiteName,
							count: Number(category.count)
						})
					}

					return acc
				}, [])
			}
		})
	}
}
