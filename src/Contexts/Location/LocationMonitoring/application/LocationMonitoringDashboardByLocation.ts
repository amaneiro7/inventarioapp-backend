import { type DashboardByLocationData } from '../domain/entity/LocationMonitoring.dto'
import { type LocationMonitoringDashboardByLocationRepository } from '../domain/repository/LocationMonitoringDashboardByLocationRepository'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'

/**
 * Service to retrieve dashboard data for location monitoring, aggregated by location.
 */
export class LocationMonitoringDashboardByLocation {
	private readonly locationMonitoringDashboardByLocationRepository: LocationMonitoringDashboardByLocationRepository
	constructor({
		locationMonitoringDashboardByLocationRepository
	}: {
		locationMonitoringDashboardByLocationRepository: LocationMonitoringDashboardByLocationRepository
	}) {
		this.locationMonitoringDashboardByLocationRepository = locationMonitoringDashboardByLocationRepository
	}

	/**
	 * Runs the service to get aggregated location monitoring dashboard data by location.
	 * @param {Criteria} criteria - The criteria for filtering the dashboard data.
	 * @returns {Promise<DashboardByLocationData>} A promise that resolves to the aggregated dashboard data by location.
	 */
	async run(criteria: Criteria): Promise<DashboardByLocationData> {
		return await this.locationMonitoringDashboardByLocationRepository.search(criteria)
	}
}
