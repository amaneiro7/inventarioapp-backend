import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type DashboardByLocationData } from '../entity/LocationMonitoring.dto'

export abstract class LocationMonitoringDashboardByLocationRepository {
	abstract run(criteria: Criteria): Promise<DashboardByLocationData>
}
