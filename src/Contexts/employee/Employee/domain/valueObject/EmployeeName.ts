import { AcceptedNullStringValueObject } from '../../../../Shared/domain/value-object/AcceptedNullStringValueObject'

/**
 * @description Represents the first name of an employee.
 */
export class EmployeeName extends AcceptedNullStringValueObject {
	private readonly MIN_LENGTH = 3
	private readonly MAX_LENGTH = 50
	private readonly VALID_REGEX = /^[A-ZÑñÁÉÍÓÚ][a-zñáéíóú]*(?: [A-ZÑñÁÉÍÓÚ][a-zñáéíóú]*)*$/
	private readonly errorMessage =
		'La primera letra debe ser en mayúsculas, el resto en minúsculas, y no puede tener espacios al final a menos que sea un nombre compuesto.'

	constructor(value: string | null) {
		super(value)
		this.ensureLengthIsBiggerThan(this.MIN_LENGTH)
		this.ensureLengthIsSmallerThan(this.MAX_LENGTH)
		this.ensureMatchesPattern(this.VALID_REGEX, this.errorMessage)
	}
}
