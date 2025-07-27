import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'

/**
 * @description Represents the name of a memory RAM type.
 */
export class MemoryRamTypeName extends StringValueObject {
	private readonly ACCEPTED_VALUES: Set<string> = new Set([
		'DDR2',
		'DDR2L',
		'DDR3',
		'DD3L',
		'DDR4',
		'DDR4L',
		'DDR5',
		'DDR5L'
	])

	constructor(readonly value: string) {
		super(value)
		this.ensureIsValidName(value)
	}

	private ensureIsValidName(value: string): void {
		if (!this.ACCEPTED_VALUES.has(value)) {
			throw new InvalidArgumentError(`<${value}> no es un tipo de memoria RAM válido.`)
		}
	}
}
