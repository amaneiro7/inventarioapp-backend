import { type AggregatedMemoryModuleData } from '../infra/sequelize/sequelizeComputerMemoryRamModulesRepository'

/**
 * @abstract class ComputerMemoryRamModulesRepository
 * @description Defines the contract for a repository that provides data about computer memory RAM modules.
 */
export abstract class ComputerMemoryRamModulesRepository {
	/**
	 * @abstract
	 * @method run
	 * @description Retrieves and transforms data about memory RAM modules, grouped by site and memory type.
	 * @returns {Promise<AggregatedMemoryModuleData[]>} A promise that resolves to the aggregated data.
	 */
	abstract run(): Promise<AggregatedMemoryModuleData[]>
}
