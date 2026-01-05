import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeDto, type EmployeePrimitives } from '../entity/Employee.dto'
import { type EmployeeEmail } from '../valueObject/EmployeeEmail'
import { type EmployeeId } from '../valueObject/EmployeeId'
import { type EmployeeUserName } from '../valueObject/EmployeeUsername' // Import EmployeeUserName

export abstract class EmployeeRepository {
	abstract save(payload: EmployeePrimitives): Promise<void>
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<EmployeeDto>>
	abstract matching(criteria: Criteria): Promise<ResponseDB<EmployeeDto>>
	abstract searchByQuery(criteria: Criteria): Promise<Nullable<EmployeeDto>>
	abstract findById(employeeId: Primitives<EmployeeId>): Promise<EmployeeDto | null>
	/**
	 * @abstract
	 * @method findByIds
	 * @description Finds multiple employees by their IDs.
	 * @param {Array<EmployeeId['value']>} ids The array of cargo IDs to search for.
	 * @returns {Promise<EmployeeDto[]>} A promise that resolves to an array of DTOs.
	 */
	abstract findByIds: (ids: Array<Primitives<EmployeeId>>) => Promise<EmployeeDto[]>
	abstract findByEmail(email: Primitives<EmployeeEmail>): Promise<Nullable<EmployeeDto>>
	abstract findByUserName(userName: Primitives<EmployeeUserName>): Promise<Nullable<EmployeeDto>>
	abstract remove(employeeId: Primitives<EmployeeId>): Promise<void>
}
