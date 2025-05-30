import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type DashboardData } from '../domain/entity/DeviceMonitoring.dto'
import { type DeviceMonitoringDashboardRepository } from '../domain/repository/DeviceMonitoringDashboardRepository'

export class DeviceMonitoringDashboard {
	constructor(private readonly deviceMonitoringDashboardRepository: DeviceMonitoringDashboardRepository) {}

	async run(criteria: Criteria): Promise<DashboardData> {
		const [summary] = await Promise.all([this.deviceMonitoringDashboardRepository.run(criteria)])
		return {
			...summary
		}
	}
}
