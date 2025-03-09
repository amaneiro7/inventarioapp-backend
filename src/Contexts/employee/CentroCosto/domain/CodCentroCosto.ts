import { InvalidArgumentError } from '../../../Shared/domain/value-object/InvalidArgumentError'
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'

export class CodCentroCosto extends StringValueObject {
	private readonly NAME_MAX_LENGTH = 4
	private readonly NAME_MIN_LENGTH = 1
	private readonly REGEX = /^\d+$/

	constructor(readonly value: string) {
		super(value)

		this.ensureIsValidName(value)
	}

	toPrimitives(): string {
		return this.value
	}

	private ensureIsValidName(value: string): void {
		if (!this.isNumeric(value)) {
			throw new InvalidArgumentError('El código del centro costo debe ser numerico')
		}
		if (!this.isCentroCostoLengthValid(value)) {
			throw new InvalidArgumentError(`<${value}> no es un codigo de centro costo válido`)
		}
	}

	private isNumeric(name: string): boolean {
		return this.REGEX.test(name)
	}

	private isCentroCostoLengthValid(name: string): boolean {
		return name.length >= this.NAME_MIN_LENGTH && name.length <= this.NAME_MAX_LENGTH
	}
}
