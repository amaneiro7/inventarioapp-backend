import { InvalidCharactersError } from '../../../../Shared/domain/errors/InvalidCharactersError'
import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'

/**
 * @description Represents the name of an input type.
 */
export class InputTypeName extends StringValueObject {
	private readonly MIN_LENGTH = 2
	private readonly MAX_LENGTH = 100
	private readonly VALID_INPUT_TYPE_NAME_REGEX = /^[A-Z0-9\s/]+$/i

	constructor(readonly value: string) {
		super(value)
		this.ensureLengthIsBiggerThan(this.MIN_LENGTH, value)
		this.ensureLengthIsLowerThan(this.MAX_LENGTH, value)
		this.ensureIsValidInputTypeName()
	}

	private ensureIsValidInputTypeName(): void {
		if (!this.VALID_INPUT_TYPE_NAME_REGEX.test(this.value)) {
			throw new InvalidCharactersError(
				this.constructor.name,
				this.value,
				'letras, números, espacios y el carácter "/"'
			)
		}
	}
}
