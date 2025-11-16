/**
 * @abstract class TotalScreensRepository
 * @description Defines the contract for a repository that provides the total count of screens.
 */
export abstract class TotalScreensRepository {
	/**
	 * @abstract
	 * @method run
	 * @description Retrieves the total count of screens.
	 * @returns {Promise<number>} A promise that resolves to the total count of screens.
	 */
	abstract run(): Promise<number>
}
