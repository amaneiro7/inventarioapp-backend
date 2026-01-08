import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { AcceptedNullStringValueObject } from '../../../../Shared/domain/value-object/AcceptedNullStringValueObject'

/**
 * @class DeviceSerial
 * @extends AcceptedNullValueObject
 * @description Represents the Value Object for a Device's serial number.
 * It encapsulates validation, normalization, and business logic for serial numbers.
 */
export class DeviceSerial extends AcceptedNullStringValueObject {
	private readonly MIN_LENGTH = 4
	private readonly MAX_LENGTH = 100
	private readonly NO_LOWERCASE_REGEX = /^[^a-z]*$/
	private readonly NO_SPECIAL_CHARS_REGEX = /^[\w-]*$/

	constructor(value: string | null) {
		super(value)
		if (this.value !== null) {
			this.value = this.value.toUpperCase().trim()
		}
		this.ensureIsValidSerial(this.value)
	}

	/**
	 * @private
	 * @method ensureIsValidSerial
	 * @description Validates the serial number based on several rules.
	 * @param {string | null} value The serial number to validate.
	 * @throws {InvalidArgumentError} If the serial number is invalid.
	 */
	private ensureIsValidSerial(value: string | null): void {
		if (value === null) return

		const errors: string[] = []
		if (!this.NO_SPECIAL_CHARS_REGEX.test(value)) {
			errors.push('No puede contener caracteres especiales')
		}
		if (!this.NO_LOWERCASE_REGEX.test(value)) {
			errors.push('Debe estar en mayúsculas')
		}
		if (value.length < this.MIN_LENGTH || value.length > this.MAX_LENGTH) {
			errors.push(`Debe tener entre ${this.MIN_LENGTH} y ${this.MAX_LENGTH} caracteres`)
		}

		if (errors.length > 0) {
			throw new InvalidArgumentError(`El serial <${value}> no es válido: ${errors.join(', ')}`)
		}
	}
}
