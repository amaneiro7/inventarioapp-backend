import { type DashboardByStateData } from '../domain/entity/LocationMonitoring.dto'
import { type LocationMonitoringDashboardByStateRepository } from '../domain/repository/LocationMonitoringDashboardByStateRepository'

export class LocationMonitoringDashboardByState {
	constructor(
		private readonly locationMonitoringDashboardByStateRepository: LocationMonitoringDashboardByStateRepository
	) {}

	async run(): Promise<DashboardByStateData> {
		const [summary] = await Promise.all([this.locationMonitoringDashboardByStateRepository.run()])
		return {
			...summary
		}
	}
}
