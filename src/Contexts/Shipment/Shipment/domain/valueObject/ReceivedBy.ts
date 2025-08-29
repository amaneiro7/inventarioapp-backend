import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { type EmployeeId } from '../../../../employee/Employee/domain/valueObject/EmployeeId'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'

export class ReceivedBy extends AcceptedNullValueObject<Primitives<EmployeeId>> {}
