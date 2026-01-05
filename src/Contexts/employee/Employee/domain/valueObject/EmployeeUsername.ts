import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'

/**
 * @description Represents the username of an employee.
 */
export class EmployeeUserName extends StringValueObject {
	private readonly MIN_LENGTH = 2
	private readonly MAX_LENGTH = 20
	private readonly VALID_REGEX = /^[a-zA-Z0-9]*$/

	constructor(value: string) {
		super(value)
		this.ensureLengthIsBiggerThan(this.MIN_LENGTH, this.value)
		this.ensureLengthIsSmallerThan(this.MAX_LENGTH, this.value)
		this.ensureMatchesPattern(this.VALID_REGEX, this.value, 'No debe contener caracteres especiales.')
	}
}
