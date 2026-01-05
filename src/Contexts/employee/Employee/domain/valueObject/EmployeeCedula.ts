import { AcceptedNullNumberValueObject } from '../../../../Shared/domain/value-object/AcceptedNullNumberValueObject'
/**
 * @description Represents the national identification number (cedula) of an employee.
 */
export class EmployeeCedula extends AcceptedNullNumberValueObject {
	private static readonly MIN_CEDULA: number = 1
	private static readonly MAX_CEDULA: number = 200000000

	constructor(value: number | null) {
		super(value)
		this.ensureIsInteger()
		this.ensureIsPositive()
		this.ensureIsLessThan(EmployeeCedula.MAX_CEDULA)
		this.ensureIsGreaterThan(EmployeeCedula.MIN_CEDULA)
	}
}
