import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeDto, type EmployeePrimitives } from '../entity/Employee.dto'
import { type EmployeeId } from '../valueObject/EmployeeId'

export abstract class EmployeeRepository {
	abstract save(payload: EmployeePrimitives): Promise<void>

	abstract searchAll(criteria: Criteria): Promise<ResponseDB<EmployeeDto>>

	abstract matching(criteria: Criteria): Promise<ResponseDB<EmployeeDto>>

	abstract searchByQuery(criteria: Criteria): Promise<Nullable<EmployeeDto>>

	abstract searchById(employeeId: Primitives<EmployeeId>): Promise<Nullable<EmployeeDto>>

	abstract remove(employeeId: Primitives<EmployeeId>): Promise<void>
}
