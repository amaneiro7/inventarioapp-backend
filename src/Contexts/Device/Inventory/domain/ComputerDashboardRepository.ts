import {
	type AggregatedBrandData,
	type AggregatedHDDData,
	type StatusCountData
} from '../infra/sequelize/dashboard/types'

/**
 * @abstract class ComputerDashboardRepository
 * @description Defines the contract for a repository that provides data for the computer-specific dashboard.
 * Each method corresponds to a specific data aggregation needed by the dashboard.
 */
export abstract class ComputerDashboardRepository {
	/**
	 * @abstract
	 * @method countByStatus
	 * @description Retrieves the count of computers, grouped by their operational status.
	 * @returns {Promise<StatusCountData[]>} A promise that resolves to an array of status counts.
	 */
	abstract countByStatus(): Promise<StatusCountData[]>

	/**
	 * @abstract
	 * @method countByBrand
	 * @description Retrieves and aggregates the count of computers, grouped by brand, model, and type of site.
	 * @returns {Promise<AggregatedBrandData[]>} A promise that resolves to an array of aggregated brand data.
	 */
	abstract countByBrand(): Promise<AggregatedBrandData[]>

	/**
	 * @abstract
	 * @method countTotalHDD
	 * @description Retrieves and aggregates the total count of computer HDDs, grouped by capacity and type.
	 * @returns {Promise<AggregatedHDDData[]>} A promise that resolves to an array of aggregated HDD data.
	 */
	abstract countTotalHDD(): Promise<AggregatedHDDData[]>
}
