import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type DashboardByLocationData } from '../domain/entity/DeviceMonitoring.dto'
import { type DeviceMonitoringDashboardByLocationRepository } from '../domain/repository/DeviceMonitoringDashboardByLocationRepository'

export class DeviceMonitoringDashboardByLocation {
	constructor(
		private readonly deviceMonitoringDashboardByLocationRepository: DeviceMonitoringDashboardByLocationRepository
	) {}

	run(criteria: Criteria): Promise<DashboardByLocationData> {
		return this.deviceMonitoringDashboardByLocationRepository.run(criteria)
	}
}
