import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type DashboardByStateData } from '../entity/DeviceMonitoring.dto'

/**
 * @abstract
 * @class DeviceMonitoringDashboardByStateRepository
 * @description Defines the contract for retrieving device monitoring data aggregated by state.
 */
export abstract class DeviceMonitoringDashboardByStateRepository {
	/**
	 * @abstract
	 * @method run
	 * @description Retrieves and aggregates device monitoring data based on state.
	 * @param {Criteria} criteria The criteria to filter the data.
	 * @returns {Promise<DashboardByStateData>} A promise that resolves to the aggregated data.
	 */
	abstract run(criteria: Criteria): Promise<DashboardByStateData>
}
