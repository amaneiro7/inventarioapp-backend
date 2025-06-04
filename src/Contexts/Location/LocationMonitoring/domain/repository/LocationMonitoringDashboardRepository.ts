import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type DashboardData } from '../entity/LocationMonitoring.dto'

export abstract class LocationMonitoringDashboardRepository {
	abstract run(criteria: Criteria): Promise<DashboardData>
}
