import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type DashboardData } from '../entity/DeviceMonitoring.dto'

/**
 * @abstract
 * @class DeviceMonitoringDashboardRepository
 * @description Defines the contract for retrieving aggregated device monitoring data for the main dashboard.
 */
export abstract class DeviceMonitoringDashboardRepository {
	/**
	 * @abstract
	 * @method run
	 * @description Retrieves and aggregates device monitoring data.
	 * @param {Criteria} criteria The criteria to filter the data.
	 * @returns {Promise<DashboardData>} A promise that resolves to the aggregated dashboard data.
	 */
	abstract run(criteria: Criteria): Promise<DashboardData>
}
