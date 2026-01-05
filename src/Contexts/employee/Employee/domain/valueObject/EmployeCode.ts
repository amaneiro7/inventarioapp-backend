import { AcceptedNullNumberValueObject } from '../../../../Shared/domain/value-object/AcceptedNullNumberValueObject'

/**
 * @description Represents the employee code, which can be null for generic employees.
 */
export class EmployeeCode extends AcceptedNullNumberValueObject {
	constructor(value: number | null) {
		super(value)
		this.ensureIsInteger()
		this.ensureIsPositive()
	}
}
