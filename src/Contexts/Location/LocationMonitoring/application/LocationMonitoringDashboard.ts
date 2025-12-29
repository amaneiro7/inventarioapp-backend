import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type DashboardData } from '../domain/entity/LocationMonitoring.dto'
import { type LocationMonitoringDashboardRepository } from '../domain/repository/LocationMonitoringDashboardRepository'

/**
 * Service to retrieve dashboard data for location monitoring.
 */
export class LocationMonitoringDashboard {
	private readonly locationMonitoringDashboardRepository: LocationMonitoringDashboardRepository
	constructor({
		locationMonitoringDashboardRepository
	}: {
		locationMonitoringDashboardRepository: LocationMonitoringDashboardRepository
	}) {
		this.locationMonitoringDashboardRepository = locationMonitoringDashboardRepository
	}

	/**
	 * Runs the service to get aggregated location monitoring dashboard data.
	 * @param {Criteria} criteria - The criteria for filtering the dashboard data.
	 * @returns {Promise<DashboardData>} A promise that resolves to the aggregated dashboard data.
	 */
	async run(criteria: Criteria): Promise<DashboardData> {
		return await this.locationMonitoringDashboardRepository.search(criteria)
	}
}
