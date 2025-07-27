import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'

/**
 * @description Represents the product collection of a processor.
 */
export class ProcessorProductCollection extends StringValueObject {
	private readonly MIN_LENGTH = 3
	private readonly MAX_LENGTH = 100

	constructor(readonly value: string) {
		super(value)
		this.ensureIsValidName(value)
	}

	private ensureIsValidName(value: string): void {
		if (value.length < this.MIN_LENGTH || value.length > this.MAX_LENGTH) {
			throw new InvalidArgumentError(
				`La colección de productos debe tener entre ${this.MIN_LENGTH} y ${this.MAX_LENGTH} caracteres.`
			)
		}
	}
}
