import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'

/**
 * Represents a category name value object.
 * Ensures that the category name is valid.
 *
 * @class CategoryName
 * @extends {StringValueObject}
 */
export class CategoryName extends StringValueObject {
	private readonly NAME_MAX_LENGTH = 100
	private readonly NAME_MIN_LENGTH = 5

	/**
	 * Creates an instance of CategoryName.
	 * @param {string} value - The value of the category name.
	 */
	constructor(readonly value: string) {
		super(value)

		this.ensureIsValidName(value)
	}

	/**
	 * Converts the CategoryName to its primitive string value.
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
		if (!this.isCategoryNameValid(value)) {
			throw new InvalidArgumentError(`<${value}> is not a valid name`)
		}
	}

	/**
	 * Checks if the category name is valid based on its length.
	 *
	 * @private
	 * @param {string} name - The name to check.
	 * @returns {boolean} True if the name is valid, false otherwise.
	 */
	private isCategoryNameValid(name: string): boolean {
		return name.length >= this.NAME_MIN_LENGTH && name.length <= this.NAME_MAX_LENGTH
	}
}
