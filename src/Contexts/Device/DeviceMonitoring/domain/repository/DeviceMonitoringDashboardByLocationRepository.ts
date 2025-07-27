import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type DashboardByLocationData } from '../entity/DeviceMonitoring.dto'

/**
 * @abstract
 * @class DeviceMonitoringDashboardByLocationRepository
 * @description Defines the contract for retrieving device monitoring data aggregated by location.
 */
export abstract class DeviceMonitoringDashboardByLocationRepository {
	/**
	 * @abstract
	 * @method run
	 * @description Retrieves and aggregates device monitoring data based on location.
	 * @param {Criteria} criteria The criteria to filter the data.
	 * @returns {Promise<DashboardByLocationData>} A promise that resolves to the aggregated data.
	 */
	abstract run(criteria: Criteria): Promise<DashboardByLocationData>
}
