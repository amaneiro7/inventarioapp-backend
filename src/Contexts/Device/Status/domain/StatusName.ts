import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'

/**
 * @class StatusName
 * @extends StringValueObject
 * @description Represents the Value Object for a Status's name.
 */
export class StatusName extends StringValueObject {
	private readonly MIN_LENGTH = 5
	private readonly MAX_LENGTH = 100

	constructor(readonly value: string) {
		super(value)
		this.ensureIsValidName(value)
	}

	/**
	 * @private
	 * @method ensureIsValidName
	 * @description Validates that the status name's length is within the allowed range.
	 * @param {string} value The name to validate.
	 * @throws {InvalidArgumentError} If the name is not valid.
	 */
	private ensureIsValidName(value: string): void {
		if (value.length < this.MIN_LENGTH || value.length > this.MAX_LENGTH) {
			throw new InvalidArgumentError(
				`<${value}> no es un nombre de estatus válido. Debe tener entre ${this.MIN_LENGTH} y ${this.MAX_LENGTH} caracteres.`
			)
		}
	}
}
