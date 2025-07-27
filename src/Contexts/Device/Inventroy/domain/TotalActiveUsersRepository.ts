/**
 * @abstract class TotalActiveUsersRepository
 * @description Defines the contract for a repository that provides the total count of active employees.
 */
export abstract class TotalActiveUsersRepository {
	/**
	 * @abstract
	 * @method run
	 * @description Retrieves the total count of active users.
	 * @returns {Promise<number>} A promise that resolves to the total count of active users.
	 */
	abstract run(): Promise<number>
}
