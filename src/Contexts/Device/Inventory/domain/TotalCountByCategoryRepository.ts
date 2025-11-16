/**
 * @abstract class TotalCountByCategoryRepository
 * @description Defines the contract for a repository that provides total device counts grouped by category.
 */
export abstract class TotalCountByCategoryRepository {
	/**
	 * @abstract
	 * @method run
	 * @description Retrieves the total count of devices grouped by category.
	 * @returns {Promise<Array<{ name: string; count: number }>>} A promise that resolves to an array of category counts.
	 */
	abstract run(): Promise<Array<{ name: string; count: number }>>
}
