import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type DashboardData } from '../domain/entity/LocationMonitoring.dto'
import { type LocationMonitoringDashboardRepository } from '../domain/repository/LocationMonitoringDashboardRepository'

export class LocationMonitoringDashboard {
	constructor(private readonly locationMonitoringDashboardRepository: LocationMonitoringDashboardRepository) {}

	async run(criteria: Criteria): Promise<DashboardData> {
		const [summary] = await Promise.all([this.locationMonitoringDashboardRepository.run(criteria)])
		return {
			...summary
		}
	}
}
