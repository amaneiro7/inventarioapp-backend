import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type DashboardByLocationData } from '../entity/DeviceMonitoring.dto'

export abstract class DeviceMonitoringDashboardByLocationRepository {
	abstract run(criteria: Criteria): Promise<DashboardByLocationData>
}
