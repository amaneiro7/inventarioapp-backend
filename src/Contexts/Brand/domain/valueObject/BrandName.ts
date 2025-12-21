import { InvalidCharactersError } from '../../../Shared/domain/errors/InvalidCharactersError'
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'

/**
 * @class BrandName
 * @extends StringValueObject
 * @description Represents the Value Object for a Brand's name.
 * It encapsulates validation rules and business logic related to the brand name.
 */
export class BrandName extends StringValueObject {
	private readonly MIN_LENGTH = 2
	private readonly MAX_LENGTH = 100
	// Allows letters (including accents), numbers, spaces, and common special characters used in brand names.
	private readonly VALID_BRAND_NAME_REGEX = /^[a-zA-Z0-9À-ÿ\s.,'()&-/]*$/

	/**
	 * @param {string} value The raw string value of the brand name.
	 * @throws {StringTooShortError} If the name is shorter than the minimum length.
	 * @throws {StringTooLongError} If the name is longer than the maximum length.
	 * @throws {InvalidCharactersError} If the name contains invalid characters.
	 */
	constructor(readonly value: string) {
		super(value)
		this.ensureLengthIsBiggerThan(this.MIN_LENGTH, value)
		this.ensureLengthIsLowerThan(this.MAX_LENGTH, value)
		this.ensureIsValidName()
	}

	private ensureIsValidName(): void {
		if (!this.VALID_BRAND_NAME_REGEX.test(this.value)) {
			throw new InvalidCharactersError(
				this.constructor.name,
				this.value,
				"letras, números y caracteres comunes como .,'()&-"
			)
		}
	}
}
