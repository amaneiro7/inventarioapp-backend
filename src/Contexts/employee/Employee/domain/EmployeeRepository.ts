import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type Nullable } from '../../../Shared/domain/Nullable'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type EmployeePrimitives } from './Employee'
import { type EmployeeEmail } from './EmployeeEmail'
import { type EmployeeId } from './EmployeeId'
import { type EmployeeUserName } from './EmployeeUsername'

export abstract class EmployeeRepository {
  abstract save(payload: EmployeePrimitives): Promise<void>

  abstract searchAll(): Promise<EmployeePrimitives[]>

  abstract matching(criteria: Criteria): Promise<EmployeePrimitives[]>

  abstract searchByUserName(userName: Primitives<EmployeeUserName>): Promise<Nullable<EmployeePrimitives>>

  abstract searchByEmail(email: Primitives<EmployeeEmail>): Promise<Nullable<EmployeePrimitives>>

  abstract searchById(employeeId: Primitives<EmployeeId>): Promise<Nullable<EmployeePrimitives>>

  abstract remove(employeeId: Primitives<EmployeeId>): Promise<void>
}
