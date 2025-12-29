import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type DashboardData } from '../entity/LocationMonitoring.dto'

/**
 * Abstract class defining the contract for retrieving overall location monitoring dashboard data.
 */
export abstract class LocationMonitoringDashboardRepository {
	/**
	 * Searches and retrieves aggregated overall location monitoring dashboard data.
	 * @param {Criteria} criteria - The criteria for filtering the dashboard data.
	 * @returns {Promise<DashboardData>} A promise that resolves to the aggregated overall dashboard data.
	 */
	abstract search(criteria: Criteria): Promise<DashboardData>
}
