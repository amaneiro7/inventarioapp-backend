/**
 * @abstract class TotalPrintersRepository
 * @description Defines the contract for a repository that provides the total count of printers.
 */
export abstract class TotalPrintersRepository {
	/**
	 * @abstract
	 * @method run
	 * @description Retrieves the total count of printers.
	 * @returns {Promise<number>} A promise that resolves to the total count of printers.
	 */
	abstract run(): Promise<number>
}
