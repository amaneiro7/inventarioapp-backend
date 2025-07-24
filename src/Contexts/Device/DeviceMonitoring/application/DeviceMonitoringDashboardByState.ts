import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type DashboardByStateData } from '../domain/entity/DeviceMonitoring.dto'
import { type DeviceMonitoringDashboardByStateRepository } from '../domain/repository/DeviceMonitoringDashboardByStateRepository'

export class DeviceMonitoringDashboardByState {
	private readonly deviceMonitoringDashboardByStateRepository: DeviceMonitoringDashboardByStateRepository
	constructor({
		deviceMonitoringDashboardByStateRepository
	}: {
		deviceMonitoringDashboardByStateRepository: DeviceMonitoringDashboardByStateRepository
	}) {
		this.deviceMonitoringDashboardByStateRepository = deviceMonitoringDashboardByStateRepository
	}

	run(criteria: Criteria): Promise<DashboardByStateData> {
		return this.deviceMonitoringDashboardByStateRepository.run(criteria)
	}
}
