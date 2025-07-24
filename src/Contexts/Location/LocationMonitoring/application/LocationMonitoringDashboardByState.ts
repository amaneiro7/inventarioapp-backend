import { type DashboardByStateData } from '../domain/entity/LocationMonitoring.dto'
import { type LocationMonitoringDashboardByStateRepository } from '../domain/repository/LocationMonitoringDashboardByStateRepository'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'

export class LocationMonitoringDashboardByState {
	private readonly locationMonitoringDashboardByStateRepository: LocationMonitoringDashboardByStateRepository
	constructor({
		locationMonitoringDashboardByStateRepository
	}: {
		locationMonitoringDashboardByStateRepository: LocationMonitoringDashboardByStateRepository
	}) {
		this.locationMonitoringDashboardByStateRepository = locationMonitoringDashboardByStateRepository
	}

	async run(criteria: Criteria): Promise<DashboardByStateData> {
		const [summary] = await Promise.all([this.locationMonitoringDashboardByStateRepository.run(criteria)])
		return {
			...summary
		}
	}
}
