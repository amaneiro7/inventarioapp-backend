import { type DashboardByLocationData } from '../domain/entity/LocationMonitoring.dto'
import { type LocationMonitoringDashboardByLocationRepository } from '../domain/repository/LocationMonitoringDashboardByLocationRepository'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'

export class LocationMonitoringDashboardByLocation {
	constructor(
		private readonly locationMonitoringDashboardByLocationRepository: LocationMonitoringDashboardByLocationRepository
	) {}

	async run(criteria: Criteria): Promise<DashboardByLocationData> {
		const [summary] = await Promise.all([this.locationMonitoringDashboardByLocationRepository.run(criteria)])
		return summary
	}
}
