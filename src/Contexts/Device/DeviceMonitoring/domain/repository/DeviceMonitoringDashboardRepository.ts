import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type DashboardData } from '../entity/DeviceMonitoring.dto'

export abstract class DeviceMonitoringDashboardRepository {
	abstract run(criteria: Criteria): Promise<DashboardData>
}
