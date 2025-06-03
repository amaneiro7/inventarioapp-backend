import { type DashboardByStateData } from '../entity/DeviceMonitoring.dto'

export abstract class DeviceMonitoringDashboardByStateRepository {
	abstract run(): Promise<DashboardByStateData>
}
