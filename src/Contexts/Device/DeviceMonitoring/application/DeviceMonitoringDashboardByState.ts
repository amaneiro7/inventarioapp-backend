import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type DashboardByStateData } from '../domain/entity/DeviceMonitoring.dto'
import { type DeviceMonitoringDashboardByStateRepository } from '../domain/repository/DeviceMonitoringDashboardByStateRepository'

export class DeviceMonitoringDashboardByState {
	constructor(
		private readonly deviceMonitoringDashboardByStateRepository: DeviceMonitoringDashboardByStateRepository
	) {}

	async run(criteria: Criteria): Promise<DashboardByStateData> {
		const [summary] = await Promise.all([this.deviceMonitoringDashboardByStateRepository.run(criteria)])
		return {
			...summary
		}
	}
}
