import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type DashboardByStateData } from '../domain/entity/DeviceMonitoring.dto'
import { type DeviceMonitoringDashboardByStateRepository } from '../domain/repository/DeviceMonitoringDashboardByStateRepository'

/**
 * @description Use case for retrieving aggregated device monitoring data grouped by state.
 */
export class DeviceMonitoringDashboardByState {
	private readonly deviceMonitoringDashboardByStateRepository: DeviceMonitoringDashboardByStateRepository

	constructor({
		deviceMonitoringDashboardByStateRepository
	}: {
		deviceMonitoringDashboardByStateRepository: DeviceMonitoringDashboardByStateRepository
	}) {
		this.deviceMonitoringDashboardByStateRepository = deviceMonitoringDashboardByStateRepository
	}

	/**
	 * @description Executes the dashboard data retrieval process, grouped by state.
	 * @param {Criteria} criteria The criteria to filter the dashboard data.
	 * @returns {Promise<DashboardByStateData>} A promise that resolves to the state-based dashboard data.
	 */
	run(criteria: Criteria): Promise<DashboardByStateData> {
		return this.deviceMonitoringDashboardByStateRepository.run(criteria)
	}
}
