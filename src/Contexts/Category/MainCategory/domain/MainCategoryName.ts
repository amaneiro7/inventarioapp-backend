import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'

/**
 * Represents a main category name value object.
 * Ensures that the main category name is valid.
 *
 * @class MainCategoryName
 * @extends {StringValueObject}
 */
export class MainCategoryName extends StringValueObject {
	private readonly NAME_MAX_LENGTH = 100
	private readonly NAME_MIN_LENGTH = 5

	/**
	 * Creates an instance of MainCategoryName.
	 * @param {string} value - The value of the main category name.
	 */
	constructor(readonly value: string) {
		super(value)

		this.ensureIsValidName(value)
	}

	/**
	 * Converts the MainCategoryName to its primitive string value.
	 *
	 * @returns {string} The primitive value.
	 */
	toPrimitives(): string {
		return this.value
	}

	/**
	 * Ensures that the provided name is valid.
	 *
	 * @private
	 * @param {string} value - The name to validate.
	 * @throws {InvalidArgumentError} If the name is not valid.
	 */
	private ensureIsValidName(value: string): void {
		if (!this.isValid(value)) {
			throw new InvalidArgumentError(`Este <${value}> no es un nombre de categoria válido`)
		}
	}

	/**
	 * Checks if the main category name is valid based on its length.
	 *
	 * @private
	 * @param {string} name - The name to check.
	 * @returns {boolean} True if the name is valid, false otherwise.
	 */
	private isValid(name: string): boolean {
		return name.length >= this.NAME_MIN_LENGTH && name.length <= this.NAME_MAX_LENGTH
	}
}
