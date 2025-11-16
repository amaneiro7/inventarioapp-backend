/**
 * @abstract class TotalComputerRepository
 * @description Defines the contract for a repository that provides the total count of computers.
 */
export abstract class TotalComputerRepository {
	/**
	 * @abstract
	 * @method run
	 * @description Retrieves the total count of computers.
	 * @returns {Promise<number>} A promise that resolves to the total count of computers.
	 */
	abstract run(): Promise<number>
}
