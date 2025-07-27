/**
 * @abstract class TotalFinantialPrintersRepository
 * @description Defines the contract for a repository that provides the total count of financial printers.
 */
export abstract class TotalFinantialPrintersRepository {
	/**
	 * @abstract
	 * @method run
	 * @description Retrieves the total count of financial printers.
	 * @returns {Promise<number>} A promise that resolves to the total count of financial printers.
	 */
	abstract run(): Promise<number>
}
