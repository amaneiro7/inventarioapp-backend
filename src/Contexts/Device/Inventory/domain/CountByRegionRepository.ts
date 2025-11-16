import { type AdministrativeRegionData } from '../infra/sequelize/sequelizeCountByRegionRepository'

/**
 * @abstract class CountByRegionRepository
 * @description Defines the contract for a repository that provides device counts grouped by geographical region.
 */
export abstract class CountByRegionRepository {
	/**
	 * @abstract
	 * @method run
	 * @description Retrieves and transforms data about device counts by region.
	 * @returns {Promise<AdministrativeRegionData[]>} A promise that resolves to the aggregated data.
	 */
	abstract run(): Promise<AdministrativeRegionData[]>
}
