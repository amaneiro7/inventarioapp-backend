import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type DashboardData } from '../domain/entity/DeviceMonitoring.dto'
import { type DeviceMonitoringDashboardRepository } from '../domain/repository/DeviceMonitoringDashboardRepository'

/**
 * @description Use case for retrieving aggregated device monitoring data for the main dashboard.
 */
export class DeviceMonitoringDashboard {
	private readonly deviceMonitoringDashboardRepository: DeviceMonitoringDashboardRepository

	constructor({
		deviceMonitoringDashboardRepository
	}: {
		deviceMonitoringDashboardRepository: DeviceMonitoringDashboardRepository
	}) {
		this.deviceMonitoringDashboardRepository = deviceMonitoringDashboardRepository
	}

	/**
	 * @description Executes the dashboard data retrieval process.
	 * @param {Criteria} criteria The criteria to filter the dashboard data.
	 * @returns {Promise<DashboardData>} A promise that resolves to the aggregated dashboard data.
	 */
	async run(criteria: Criteria): Promise<DashboardData> {
		return this.deviceMonitoringDashboardRepository.run(criteria)
	}
}
