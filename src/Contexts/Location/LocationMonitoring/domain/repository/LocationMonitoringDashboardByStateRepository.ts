import { type DashboardByStateData } from '../entity/LocationMonitoring.dto'

export abstract class LocationMonitoringDashboardByStateRepository {
	abstract run(): Promise<DashboardByStateData>
}
