import { type AggregatedCategoryData } from '../infra/sequelize/sequelizeCountByCategoryRepository'

/**
 * @abstract class CountByCategoryRepository
 * @description Defines the contract for a repository that provides device counts grouped by category.
 */
export abstract class CountByCategoryRepository {
	/**
	 * @abstract
	 * @method run
	 * @description Retrieves and transforms data about device counts by category and site type.
	 * @returns {Promise<AggregatedCategoryData[]>} A promise that resolves to the aggregated data.
	 */
	abstract run(): Promise<AggregatedCategoryData[]>
}
