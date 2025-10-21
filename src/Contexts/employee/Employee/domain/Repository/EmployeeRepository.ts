import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeDto, type EmployeePrimitives } from '../entity/Employee.dto'
import { type EmployeeEmail } from '../valueObject/EmployeeEmail'
import { type EmployeeId } from '../valueObject/EmployeeId'
import { type EmployeeUserName } from '../valueObject/EmployeeUsername' // Import EmployeeUserName

/**
 * @abstract
 * @class EmployeeRepository
 * @description Defines the contract for Employee data persistence operations.
 */
export abstract class EmployeeRepository {
	/**
	 * @abstract
	 * @method save
	 * @description Saves an Employee entity to the data store. This method should handle both creation and updates.
	 * @param {EmployeePrimitives} payload The Employee data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 */
	abstract save(payload: EmployeePrimitives): Promise<void>

	/**
	 * @abstract
	 * @method searchAll
	 * @description Retrieves a paginated list of Employee entities based on the provided criteria.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<EmployeeDto>>} A promise that resolves to a paginated response containing Employee DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<EmployeeDto>>

	/**
	 * @abstract
	 * @method matching
	 * @description Retrieves a paginated list of Employee entities that match specific criteria.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<EmployeeDto>>} A promise that resolves to a paginated response containing Employee DTOs.
	 */
	abstract matching(criteria: Criteria): Promise<ResponseDB<EmployeeDto>>

	/**
	 * @abstract
	 * @method searchByQuery
	 * @description Retrieves a single Employee entity based on complex criteria.
	 * @param {Criteria} criteria The criteria for filtering the employee.
	 * @returns {Promise<Nullable<EmployeeDto>>} A promise that resolves to the Employee DTO if found, or null otherwise.
	 */
	abstract searchByQuery(criteria: Criteria): Promise<Nullable<EmployeeDto>>

	/**
	 * @abstract
	 * @method searchById
	 * @description Retrieves a single Employee entity by its unique identifier.
	 * @param {Primitives<EmployeeId>} employeeId The ID of the Employee to search for.
	 * @returns {Promise<EmployeeDto | null>} A promise that resolves to the Employee DTO if found, or null otherwise.
	 */
	abstract searchById(employeeId: Primitives<EmployeeId>): Promise<EmployeeDto | null>

	/**
	 * @abstract
	 * @method searchByEmail
	 * @description Retrieves a single Employee entity by its email address.
	 * @param {Primitives<EmployeeEmail>} email The email address of the Employee to search for.
	 * @returns {Promise<Nullable<EmployeeDto>>} A promise that resolves to the Employee DTO if found, or null otherwise.
	 */
	abstract searchByEmail(email: Primitives<EmployeeEmail>): Promise<Nullable<EmployeeDto>>

	/**
	 * @abstract
	 * @method searchByUserName
	 * @description Retrieves a single Employee entity by its username.
	 * @param {Primitives<EmployeeUserName>} userName The username of the Employee to search for.
	 * @returns {Promise<Nullable<EmployeeDto>>} A promise that resolves to the Employee DTO if found, or null otherwise.
	 */
	abstract searchByUserName(userName: Primitives<EmployeeUserName>): Promise<Nullable<EmployeeDto>>

	/**
	 * @abstract
	 * @method remove
	 * @description Deletes an Employee entity from the data store by its unique identifier.
	 * @param {Primitives<EmployeeId>} employeeId The ID of the Employee to remove.
	 * @returns {Promise<void>} A promise that resolves when the remove operation is complete.
	 */
	abstract remove(employeeId: Primitives<EmployeeId>): Promise<void>
}
