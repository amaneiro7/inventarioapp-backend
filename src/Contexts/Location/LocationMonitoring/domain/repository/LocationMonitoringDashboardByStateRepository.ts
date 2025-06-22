import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type DashboardByStateData } from '../entity/LocationMonitoring.dto'

export abstract class LocationMonitoringDashboardByStateRepository {
	abstract run(criteria: Criteria): Promise<DashboardByStateData>
}
