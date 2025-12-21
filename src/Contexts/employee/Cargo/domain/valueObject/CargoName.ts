import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'
import { InvalidCharactersError } from '../../../../Shared/domain/errors/InvalidCharactersError'

/**
 * @description Represents the name of a Cargo.
 */
export class CargoName extends StringValueObject {
	private readonly MIN_LENGTH = 5
	private readonly MAX_LENGTH = 50
	private readonly VALID_REGEX = /^[a-zA-ZÀ-ÿ0-9()\-.,\s]*$/

	constructor(readonly value: string) {
		super(value)
		this.ensureLengthIsLowerThan(this.MAX_LENGTH, value)
		this.ensureLengthIsBiggerThan(this.MIN_LENGTH, value)
		this.ensureHasValidCharacters(value)
	}

	private ensureHasValidCharacters(value: string): void {
		if (!this.VALID_REGEX.test(value)) {
			throw new InvalidCharactersError(
				this.constructor.name,
				value,
				'alfanuméricos, paréntesis, guiones, puntos y comas'
			)
		}
	}
}
