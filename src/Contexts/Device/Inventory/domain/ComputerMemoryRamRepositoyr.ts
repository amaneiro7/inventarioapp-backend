import { type AggregatedMemoryCapacityData } from '../infra/sequelize/sequelizeComputerMemoryRamRepository'

/**
 * @abstract class ComputerMemoryRamRepository
 * @description Defines the contract for a repository that provides data about computer memory RAM capacity.
 */
export abstract class ComputerMemoryRamRepository {
	/**
	 * @abstract
	 * @method run
	 * @description Retrieves and transforms data about total memory RAM capacity, grouped by site.
	 * @returns {Promise<AggregatedMemoryCapacityData[]>} A promise that resolves to the aggregated data.
	 */
	abstract run(): Promise<AggregatedMemoryCapacityData[]>
}
