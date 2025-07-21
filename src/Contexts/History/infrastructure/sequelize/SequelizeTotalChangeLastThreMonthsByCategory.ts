import { Op } from 'sequelize'
import { HistoryModel } from './HistorySchema'
import { TimeTolive } from '../../../Shared/domain/CacheRepository'
import { CacheService } from '../../../Shared/domain/CacheService'
import { sequelize } from '../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { type TotalChangeLastThreMonthsByCategoryRepository } from '../../domain/TotalChangeLastThreMonthsByCategoryRepository'
import { MainCategoryList } from '../../../Category/MainCategory/domain/MainCategory'

// Interface for the raw data returned from the Sequelize query
interface RawHistoryData {
	name: string
	count: string | number
	createdAt: Date
}

// Interface for the grouped result by month and category
interface GroupedResult {
	[month: string]: { [categoryName: string]: number }
}

/**
 * @class SequelizeTotalChangeLastThreMonthsByCategoryRepository
 * @implements {TotalChangeLastThreMonthsByCategoryRepository}
 * @description Repository for retrieving aggregated history data showing changes by category
 * over the last few months. Utilizes caching for performance.
 */
export class SequelizeTotalChangeLastThreMonthsByCategoryRepository
	implements TotalChangeLastThreMonthsByCategoryRepository
{
	private readonly cacheKey: string = 'totalChangeLastThreMonthsByCategory'
	constructor(private readonly cache: CacheService) {}

	/**
	 * @method run
	 * @description Fetches and aggregates historical data of changes by category for a specified number of months.
	 * The data is cached to improve subsequent requests.
	 * @param {object} params - Parameters for the query.
	 * @param {number} [params.months=2] - The number of months to look back for data.
	 * @returns {Promise<object>} A promise that resolves to an aggregated object of changes by month and category.
	 */
	async run({ months = 2 }: { months?: number }): Promise<object> {
		// Ensure the cache key is unique for different 'months' values.
		const specificCacheKey = `${this.cacheKey}:${months}`

		return await this.cache.getCachedData({
			cacheKey: specificCacheKey,
			ex: TimeTolive.TOO_SHORT,
			fetchFunction: async () => {
				const cutoffDate = new Date()
				cutoffDate.setMonth(cutoffDate.getMonth() - months)

				const lastActiviries = (await HistoryModel.findAll({
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
				})) as unknown as RawHistoryData[]

				// Use reduce to group and aggregate data more efficiently.
				const groupedResult = lastActiviries.reduce((acc: GroupedResult, history) => {
					const { name, count, createdAt } = history
					const countNumber = Number(count)

					if (name) {
						const monthFormatted = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(createdAt)

						// Initialize month entry if it doesn't exist
						acc[monthFormatted] = acc[monthFormatted] || {}

						// Aggregate count for the category within the month
						acc[monthFormatted][name] = (acc[monthFormatted][name] || 0) + countNumber
					}
					return acc
				}, {})

				// Transform the grouped object into the final array format.
				const finalResult = Object.keys(groupedResult).map(month => {
					const monthData = { name: month }
					Object.assign(monthData, groupedResult[month])
					return monthData
				})

				return finalResult
			}
		})
	}
}
