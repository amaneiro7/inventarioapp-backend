import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type DashboardByLocationData } from '../entity/LocationMonitoring.dto'

/**
 * Abstract class defining the contract for retrieving location monitoring dashboard data aggregated by location.
 */
export abstract class LocationMonitoringDashboardByLocationRepository {
	/**
	 * Runs the query to get aggregated location monitoring dashboard data by location.
	 * @param {Criteria} criteria - The criteria for filtering the dashboard data.
	 * @returns {Promise<DashboardByLocationData>} A promise that resolves to the aggregated dashboard data by location.
	 */
	abstract run(criteria: Criteria): Promise<DashboardByLocationData>
}
