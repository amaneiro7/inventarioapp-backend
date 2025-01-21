import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeePrimitives } from '../entity/Employee'
import { type EmployeeId } from '../valueObject/EmployeeId'

export abstract class EmployeeRepository {
	abstract save(payload: EmployeePrimitives): Promise<void>

	abstract searchAll(): Promise<EmployeePrimitives[]>

	abstract matching(criteria: Criteria): Promise<EmployeePrimitives[]>

	abstract searchByQuery(
		criteria: Criteria
	): Promise<Nullable<EmployeePrimitives>>

	abstract searchById(
		employeeId: Primitives<EmployeeId>
	): Promise<Nullable<EmployeePrimitives>>

	abstract remove(employeeId: Primitives<EmployeeId>): Promise<void>
}
