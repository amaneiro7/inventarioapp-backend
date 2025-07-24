import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type DashboardData } from '../domain/entity/LocationMonitoring.dto'
import { type LocationMonitoringDashboardRepository } from '../domain/repository/LocationMonitoringDashboardRepository'

export class LocationMonitoringDashboard {
	private readonly locationMonitoringDashboardRepository: LocationMonitoringDashboardRepository
	constructor({
		locationMonitoringDashboardRepository
	}: {
		locationMonitoringDashboardRepository: LocationMonitoringDashboardRepository
	}) {
		this.locationMonitoringDashboardRepository = locationMonitoringDashboardRepository
	}

	async run(criteria: Criteria): Promise<DashboardData> {
		const [summary] = await Promise.all([this.locationMonitoringDashboardRepository.run(criteria)])
		return {
			...summary
		}
	}
}
