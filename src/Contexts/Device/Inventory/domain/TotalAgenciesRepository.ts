/**
 * @abstract class TotalAgenciesRepository
 * @description Defines the contract for a repository that provides the total count of agencies.
 */
export abstract class TotalAgenciesRepository {
	/**
	 * @abstract
	 * @method run
	 * @description Retrieves the total count of agencies.
	 * @returns {Promise<number>} A promise that resolves to the total count of agencies.
	 */
	abstract run(): Promise<number>
}
