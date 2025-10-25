import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type UserId } from '../valueObject/UserId'
// import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type UserDto, type UserPrimitives } from '../entity/User.dto'
// import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type EmployeeId } from '../../../../employee/Employee/domain/valueObject/EmployeeId'

/**
 * @abstract
 * @class UserRepository
 * @description Defines the contract for User data persistence operations.
 */
export abstract class UserRepository {
	/**
	 * @abstract
	 * @method save
	 * @description Saves a User entity to the data store. This method should handle both creation and updates.
	 * @param {UserPrimitives} user The User data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 */
	abstract save(user: UserPrimitives): Promise<void>

	// /**
	//  * @abstract
	//  * @method searchAll
	//  * @description Retrieves a paginated list of User entities based on the provided criteria.
	//  * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	//  * @returns {Promise<ResponseDB<UserPrimitivesOptional>>} A promise that resolves to a paginated response containing User DTOs.
	//  */
	// abstract searchAll(criteria: Criteria): Promise<ResponseDB<UserDto>>

	/**
	 * @abstract
	 * @method searchById
	 * @description Retrieves a single User entity by its unique identifier.
	 * @param {Primitives<UserId>} id The ID of the User to search for.
	 * @returns {Promise<UserPrimitives | null>} A promise that resolves to the User DTO if found, or null otherwise.
	 */
	abstract searchById(id: Primitives<UserId>): Promise<UserDto | null>

	/**
	 * @abstract
	 * @method delete
	 * @description Deletes a User entity from the data store by its unique identifier.
	 * @param {Primitives<UserId>} id The ID of the User to delete.
	 * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
	 */
	abstract delete(id: Primitives<UserId>): Promise<void>

	/**
	 * @abstract
	 * @method searchByEmployeeId
	 * @description Retrieves a single User entity by its associated employee ID.
	 * @param {Primitives<EmployeeId>} employeeId The employee ID of the User to search for.
	 * @returns {Promise<UserPrimitives | null>} A promise that resolves to the User DTO if found, or null otherwise.
	 */
	abstract searchByEmployeeId(employeeId: Primitives<EmployeeId>): Promise<UserDto | null>
}
