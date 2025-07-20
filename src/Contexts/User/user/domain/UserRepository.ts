import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type UserId } from './UserId'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type UserPrimitivesOptional, type UserPrimitives } from './User'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'

/**
 * @abstract
 * @class UserRepository
 * @description Abstract class defining the contract for User data persistence operations.
 * This ensures that any concrete implementation of a User repository adheres to a standard set of methods,
 * promoting loose coupling and testability.
 */
export abstract class UserRepository {
	/**
	 * @abstract
	 * @method save
	 * @description Saves a User entity to the data store. This method should handle both creation and updates.
	 * @param {UserPrimitives} user - The User data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 */
	abstract save(user: UserPrimitives): Promise<void>

	/**
	 * @abstract
	 * @method searchAll
	 * @description Retrieves a paginated list of User entities based on the provided criteria.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<UserPrimitivesOptional>>} A promise that resolves to a paginated response containing User DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<UserPrimitivesOptional>>

	/**
	 * @abstract
	 * @method searchById
	 * @description Retrieves a single User entity by its unique identifier.
	 * @param {Primitives<UserId>} id - The ID of the User to search for.
	 * @returns {Promise<UserPrimitives | null>} A promise that resolves to the User DTO if found, or null otherwise.
	 */
	abstract searchById(id: Primitives<UserId>): Promise<UserPrimitives | null>

	/**
	 * @abstract
	 * @method searchByEmail
	 * @description Retrieves a single User entity by its email address.
	 * @param {string} userEmail - The email address of the User to search for.
	 * @returns {Promise<UserPrimitives | null>} A promise that resolves to the User DTO if found, or null otherwise.
	 */
	abstract searchByEmail(userEmail: string): Promise<UserPrimitives | null>

	/**
	 * @abstract
	 * @method delete
	 * @description Deletes a User entity from the data store by its unique identifier.
	 * @param {Primitives<UserId>} id - The ID of the User to delete.
	 * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
	 */
	abstract delete(id: Primitives<UserId>): Promise<void>
}
