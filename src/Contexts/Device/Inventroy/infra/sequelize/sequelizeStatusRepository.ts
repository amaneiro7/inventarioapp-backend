import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { CacheService } from '../../../../Shared/domain/CacheService'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { DeviceModel } from '../../../Device/infrastructure/sequelize/DeviceSchema'
import { type StatusDashboardRepository } from '../../domain/StatusDashboardRepository'

// Interface for the raw data returned from the Sequelize query
interface RawStatusData {
	categoryName: string
	statusName: string
	count: string | number
}

// Interface for the aggregated dashboard data
interface AggregatedDashboardData {
	overall: Record<string, number>
	[category: string]: Record<string, number> | Record<string, number>
}

/**
 * @class SequelizeStatusDashboardRepository
 * @implements {StatusDashboardRepository}
 * @description Concrete implementation of the StatusDashboardRepository using Sequelize.
 * Provides a dashboard view of device statuses grouped by category.
 * Utilizes caching for improved performance.
 */
export class SequelizeStatusDashboardRepository implements StatusDashboardRepository {
	private readonly cacheKey: string = 'statusDashboard'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		this.cache = cache
	}

	/**
	 * @method run
	 * @description Retrieves aggregated device status data grouped by category.
	 * @returns {Promise<{ total: number; status: AggregatedDashboardData }>} A promise that resolves to an object
	 * containing the total count of devices and their status breakdown by category.
	 */
	async run(): Promise<{ total: number; status: AggregatedDashboardData }> {
		return await this.cache.getCachedData<{
			total: number
			status: AggregatedDashboardData
		}>({
			cacheKey: this.cacheKey,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const devices = (await DeviceModel.findAll({
					attributes: [
						[sequelize.col('category.name'), 'categoryName'],
						[sequelize.col('status.name'), 'statusName'],
						[sequelize.fn('COUNT', sequelize.col('*')), 'count']
					],
					include: [
						{
							association: 'category',
							attributes: []
						},
						{
							association: 'status',
							attributes: []
						}
					],
					group: ['category.name', 'status.name'],
					raw: true
				})) as unknown as RawStatusData[]

				const initialDashboardState: AggregatedDashboardData = { overall: {} }
				let totalDevices = 0

				const dashboardResult = devices.reduce((acc, device) => {
					const { statusName, categoryName, count } = device
					const countNumber = Number(count)

					// Sum to overall total
					totalDevices += countNumber

					// Aggregate to overall status counts
					acc.overall[statusName] = (acc.overall[statusName] || 0) + countNumber

					// Ensure category section exists
					if (!acc[categoryName]) {
						acc[categoryName] = {}
					}

					// Aggregate status within category
					;(acc[categoryName] as Record<string, number>)[statusName] =
						((acc[categoryName] as Record<string, number>)[statusName] || 0) + countNumber

					return acc
				}, initialDashboardState)

				return {
					total: totalDevices,
					status: dashboardResult
				}
			}
		})
	}
}
