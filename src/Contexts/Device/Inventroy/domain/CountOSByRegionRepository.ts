import { type AggregatedOSByRegionData } from '../infra/sequelize/sequelizeCountOSByRegionRepository'

/**
 * @abstract class CountOSByRegionRepository
 * @description Defines the contract for a repository that provides OS counts grouped by geographical region.
 */
export abstract class CountOSByRegionRepository {
	/**
	 * @abstract
	 * @method run
	 * @description Retrieves and transforms data about OS counts by region.
	 * @returns {Promise<AggregatedOSByRegionData[]>} A promise that resolves to the aggregated data.
	 */
	abstract run(): Promise<AggregatedOSByRegionData[]>
}
