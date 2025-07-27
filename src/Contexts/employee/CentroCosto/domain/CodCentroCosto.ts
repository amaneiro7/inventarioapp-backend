import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'

/**
 * @description Represents the code of a CentroCosto.
 */
export class CodCentroCosto extends StringValueObject {
	private readonly MIN_LENGTH = 1
	private readonly MAX_LENGTH = 4
	private readonly NUMERIC_REGEX = /^\d+$/

	constructor(readonly value: string) {
		super(value)
		this.ensureIsValidCode(value)
	}

	private ensureIsValidCode(value: string): void {
		const errors: string[] = []

		if (!this.NUMERIC_REGEX.test(value)) {
			errors.push('Debe ser numérico.')
		}
		if (value.length < this.MIN_LENGTH || value.length > this.MAX_LENGTH) {
			errors.push(`Debe tener entre ${this.MIN_LENGTH} y ${this.MAX_LENGTH} dígitos.`)
		}

		if (errors.length > 0) {
			throw new InvalidArgumentError(`El código de centro de costo '${value}' no es válido: ${errors.join(', ')}`)
		}
	}
}
