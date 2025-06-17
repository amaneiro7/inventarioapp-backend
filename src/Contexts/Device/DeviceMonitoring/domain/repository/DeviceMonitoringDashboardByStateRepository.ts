import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type DashboardByStateData } from '../entity/DeviceMonitoring.dto'

export abstract class DeviceMonitoringDashboardByStateRepository {
	abstract run(criteria: Criteria): Promise<DashboardByStateData>
}
