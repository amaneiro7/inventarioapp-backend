import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'

/**
 * @description Represents the name of an input type.
 */
export class InputTypeName extends StringValueObject {
	private readonly MIN_LENGTH = 5
	private readonly MAX_LENGTH = 100

	constructor(readonly value: string) {
		super(value)
		this.ensureIsValidName(value)
	}

	private ensureIsValidName(value: string): void {
		if (value.length < this.MIN_LENGTH || value.length > this.MAX_LENGTH) {
			throw new InvalidArgumentError(`<${value}> no es un nombre de tipo de entrada válido.`)
		}
	}
}
