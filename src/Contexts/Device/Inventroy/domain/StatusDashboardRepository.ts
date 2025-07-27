import { type AggregatedDashboardData } from '../infra/sequelize/sequelizeStatusRepository'

/**
 * @abstract class StatusDashboardRepository
 * @description Defines the contract for a repository that provides a dashboard view of device statuses.
 */
export abstract class StatusDashboardRepository {
	/**
	 * @abstract
	 * @method run
	 * @description Retrieves aggregated device status data grouped by category.
	 * @returns {Promise<{ total: number; status: AggregatedDashboardData }>} A promise that resolves to the dashboard data.
	 */
	abstract run(): Promise<{ total: number; status: AggregatedDashboardData }>
}
