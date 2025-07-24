import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type DashboardData } from '../domain/entity/DeviceMonitoring.dto'
import { type DeviceMonitoringDashboardRepository } from '../domain/repository/DeviceMonitoringDashboardRepository'

export class DeviceMonitoringDashboard {
	private readonly deviceMonitoringDashboardRepository: DeviceMonitoringDashboardRepository
	constructor({
		deviceMonitoringDashboardRepository
	}: {
		deviceMonitoringDashboardRepository: DeviceMonitoringDashboardRepository
	}) {
		this.deviceMonitoringDashboardRepository = deviceMonitoringDashboardRepository
	}

	async run(criteria: Criteria): Promise<DashboardData> {
		const [summary] = await Promise.all([this.deviceMonitoringDashboardRepository.run(criteria)])
		return {
			...summary
		}
	}
}
