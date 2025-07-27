/**
 * @abstract class TotalAdministrativeSitesRepository
 * @description Defines the contract for a repository that provides the total count of administrative sites.
 */
export abstract class TotalAdministrativeSitesRepository {
	/**
	 * @abstract
	 * @method run
	 * @description Retrieves the total count of administrative sites.
	 * @returns {Promise<number>} A promise that resolves to the total count of administrative sites.
	 */
	abstract run(): Promise<number>
}
