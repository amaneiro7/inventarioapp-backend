import { Op } from 'sequelize'
import { HistoryModel } from './HistorySchema'
import { TimeTolive } from '../../../Shared/domain/CacheRepository'
import { CacheService } from '../../../Shared/domain/CacheService'
import { sequelize } from '../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { type TotalChangeLastThreMonthsByCategoryRepository } from '../../domain/TotalChangeLastThreMonthsByCategoryRepository'
import { MainCategoryList } from '../../../Category/MainCategory/domain/MainCategory'

export class SequelizeTotalChangeLastThreMonthsByCategoryRepository
	implements TotalChangeLastThreMonthsByCategoryRepository
{
	private readonly cacheKey: string = 'totalChangeLastThreMonthsByCategory'
	constructor(private readonly cache: CacheService) {}
	async run({ months = 2 }: { months?: number }): Promise<{}> {
		return await this.cache.getCachedData({
			cacheKey: `${this.cacheKey}`,
			ex: TimeTolive.TOO_SHORT,
			fetchFunction: async () => {
				const cutoffDate = new Date()
				cutoffDate.setMonth(cutoffDate.getMonth() - months)
				const lastActiviries = await HistoryModel.findAll({
					attributes: [
						[sequelize.col('device.category.name'), 'name'],
						[sequelize.fn('COUNT', sequelize.col('*')), 'count'],
						'createdAt'
					],
					include: [
						{
							association: 'device',
							attributes: [],
							include: [
								{
									association: 'category',
									attributes: [],
									where: {
										[Op.not]: {
											mainCategoryId: [
												MainCategoryList.PARTS,
												MainCategoryList.FINANTIALPRINTER,
												MainCategoryList.PRINTERS
											]
										}
									}
								}
							]
						}
					],
					where: {
						createdAt: {
							[Op.gte]: cutoffDate
						}
					},
					group: ['device.category.name', 'createdAt'],
					order: [
						['createdAt', 'ASC'],
						[sequelize.col('device.category.name'), 'ASC']
					],
					raw: true
				})
				const groupedResult: Record<string, Record<string, number>> = {}
				lastActiviries.forEach((history: any) => {
					const { name, count, createdAt } = history

					if (name) {
						const monthFormatted = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(createdAt)
						const countNumber = Number(count)

						if (!groupedResult[monthFormatted]) {
							groupedResult[monthFormatted] = {}
						}

						groupedResult[monthFormatted][name] = (groupedResult[monthFormatted][name] || 0) + countNumber
					}
				})

				const finalResult = []
				for (const month in groupedResult) {
					const monthData: Record<string, any> = { name: month }
					for (const categoryName in groupedResult[month]) {
						monthData[categoryName] = groupedResult[month][categoryName]
					}
					finalResult.push(monthData)
				}

				return finalResult
			}
		})
	}
}
