import { type DashboardByLocationData } from '../domain/entity/DeviceMonitoring.dto'
import { type DeviceMonitoringDashboardByLocationRepository } from '../domain/repository/DeviceMonitoringDashboardByLocationRepository'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'

export class DeviceMonitoringDashboardByLocation {
	constructor(
		private readonly deviceMonitoringDashboardByLocationRepository: DeviceMonitoringDashboardByLocationRepository
	) {}

	async run(criteria: Criteria): Promise<DashboardByLocationData> {
		const [summary] = await Promise.all([this.deviceMonitoringDashboardByLocationRepository.run(criteria)])
		return summary
	}
}
