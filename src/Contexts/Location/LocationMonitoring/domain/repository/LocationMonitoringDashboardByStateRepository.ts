import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type DashboardByStateData } from '../entity/LocationMonitoring.dto'

/**
 * Abstract class defining the contract for retrieving location monitoring dashboard data aggregated by state.
 */
export abstract class LocationMonitoringDashboardByStateRepository {
	/**
	 * Runs the query to get aggregated location monitoring dashboard data by state.
	 * @param {Criteria} criteria - The criteria for filtering the dashboard data.
	 * @returns {Promise<DashboardByStateData>} A promise that resolves to the aggregated dashboard data by state.
	 */
	abstract search(criteria: Criteria): Promise<DashboardByStateData>
}
