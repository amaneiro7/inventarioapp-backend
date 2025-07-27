import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type DashboardByLocationData } from '../domain/entity/DeviceMonitoring.dto'
import { type DeviceMonitoringDashboardByLocationRepository } from '../domain/repository/DeviceMonitoringDashboardByLocationRepository'

/**
 * @description Use case for retrieving aggregated device monitoring data grouped by location.
 */
export class DeviceMonitoringDashboardByLocation {
	private readonly deviceMonitoringDashboardByLocationRepository: DeviceMonitoringDashboardByLocationRepository

	constructor({
		deviceMonitoringDashboardByLocationRepository
	}: {
		deviceMonitoringDashboardByLocationRepository: DeviceMonitoringDashboardByLocationRepository
	}) {
		this.deviceMonitoringDashboardByLocationRepository = deviceMonitoringDashboardByLocationRepository
	}

	/**
	 * @description Executes the dashboard data retrieval process, grouped by location.
	 * @param {Criteria} criteria The criteria to filter the dashboard data.
	 * @returns {Promise<DashboardByLocationData>} A promise that resolves to the location-based dashboard data.
	 */
	run(criteria: Criteria): Promise<DashboardByLocationData> {
		return this.deviceMonitoringDashboardByLocationRepository.run(criteria)
	}
}
