import { type DashboardByStateData } from '../domain/entity/LocationMonitoring.dto'
import { type LocationMonitoringDashboardByStateRepository } from '../domain/repository/LocationMonitoringDashboardByStateRepository'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'

/**
 * Service to retrieve dashboard data for location monitoring, aggregated by state.
 */
export class LocationMonitoringDashboardByState {
	private readonly locationMonitoringDashboardByStateRepository: LocationMonitoringDashboardByStateRepository
	constructor({
		locationMonitoringDashboardByStateRepository
	}: {
		locationMonitoringDashboardByStateRepository: LocationMonitoringDashboardByStateRepository
	}) {
		this.locationMonitoringDashboardByStateRepository = locationMonitoringDashboardByStateRepository
	}

	/**
	 * Runs the service to get aggregated location monitoring dashboard data by state.
	 * @param {Criteria} criteria - The criteria for filtering the dashboard data.
	 * @returns {Promise<DashboardByStateData>} A promise that resolves to the aggregated dashboard data by state.
	 */
	async run(criteria: Criteria): Promise<DashboardByStateData> {
		return await this.locationMonitoringDashboardByStateRepository.search(criteria)
	}
}
