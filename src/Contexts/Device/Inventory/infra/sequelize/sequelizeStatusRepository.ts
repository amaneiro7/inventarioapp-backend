import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { CacheService } from '../../../../Shared/domain/CacheService'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { DeviceModel } from '../../../Device/infrastructure/sequelize/schema/DeviceSchema'
import { type StatusDashboardRepository } from '../../domain/StatusDashboardRepository'

// --- Type Definitions for Status Dashboard ---

/** Represents the raw data structure returned from the Sequelize query. */
interface RawStatusData {
	categoryName: string
	statusName: string
	count: string | number
}

/** Represents the final aggregated data structure for the status dashboard. */
export interface AggregatedDashboardData {
	overall: Record<string, number>
	[category: string]: Record<string, number> // Each category will have a record of its status counts
}

/**
 * @class SequelizeStatusDashboardRepository
 * @implements {StatusDashboardRepository}
 * @description Concrete implementation of the StatusDashboardRepository using Sequelize.
 * Provides a dashboard view of device statuses grouped by category.
 * Utilizes caching for improved performance.
 */
export class SequelizeStatusDashboardRepository implements StatusDashboardRepository {
	private readonly cacheKey: string = 'dashboard:status'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		this.cache = cache
	}

	/**
	 * @method run
	 * @description Retrieves aggregated device status data grouped by category.
	 * @returns {Promise<{ total: number; status: AggregatedDashboardData }>} A promise that resolves to the dashboard data.
	 */
	async run(): Promise<{ total: number; status: AggregatedDashboardData }> {
		return await this.cache.getCachedData<{ total: number; status: AggregatedDashboardData }>({
			cacheKey: this.cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const devices = (await DeviceModel.findAll({
					attributes: [
						[sequelize.col('category.name'), 'categoryName'],
						[sequelize.col('status.name'), 'statusName'],
						[sequelize.fn('COUNT', sequelize.col('*')), 'count']
					],
					include: [
						{ association: 'category', attributes: [] },
						{ association: 'status', attributes: [] }
					],
					group: ['category.name', 'status.name'],
					raw: true
				})) as unknown as RawStatusData[]

				const initialDashboardState: AggregatedDashboardData = { overall: {} }
				let totalDevices = 0

				const dashboardResult = devices.reduce((acc, device) => {
					const { statusName, categoryName, count } = device
					const countNumber = Number(count)

					totalDevices += countNumber
					acc.overall[statusName] = (acc.overall[statusName] || 0) + countNumber

					if (!acc[categoryName]) {
						acc[categoryName] = {}
					}
					const categoryStatus = acc[categoryName] as Record<string, number>
					categoryStatus[statusName] = (categoryStatus[statusName] || 0) + countNumber

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
