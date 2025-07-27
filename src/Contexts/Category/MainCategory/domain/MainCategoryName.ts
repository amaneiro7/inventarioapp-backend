import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'

/**
 * @class MainCategoryName
 * @extends StringValueObject
 * @description Represents the Value Object for a Main Category's name.
 * It encapsulates validation rules for the main category name.
 */
export class MainCategoryName extends StringValueObject {
	private readonly MIN_LENGTH = 5
	private readonly MAX_LENGTH = 100

	/**
	 * @param {string} value The raw string value of the main category name.
	 * @throws {InvalidArgumentError} If the provided name does not meet the length constraints.
	 */
	constructor(readonly value: string) {
		super(value)
		this.ensureNameHasValidLength(value)
	}

	/**
	 * @private
	 * @method ensureNameHasValidLength
	 * @description Validates that the main category name's length is within the allowed range.
	 * @param {string} name The main category name to validate.
	 * @throws {InvalidArgumentError} If the name's length is invalid.
	 */
	private ensureNameHasValidLength(name: string): void {
		if (name.length < this.MIN_LENGTH || name.length > this.MAX_LENGTH) {
			throw new InvalidArgumentError(
				`<${name}> no es un nombre de categoría principal válido. Debe tener entre ${this.MIN_LENGTH} y ${this.MAX_LENGTH} caracteres.`
			)
		}
	}
}
