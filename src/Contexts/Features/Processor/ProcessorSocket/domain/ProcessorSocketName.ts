import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'

/**
 * @description Represents the name of a processor socket.
 */
export class ProcessorSocketName extends StringValueObject {
	private readonly ACCEPTED_VALUES: Set<string> = new Set([
		'LGA 775',
		'Socket M',
		'LGA 771',
		'Socket P',
		'Socket 441',
		'LGA 1366',
		'LGA 1156'
	])

	constructor(readonly value: string) {
		super(value)
		this.ensureIsValidName(value)
	}

	private ensureIsValidName(value: string): void {
		if (!this.ACCEPTED_VALUES.has(value)) {
			throw new InvalidArgumentError(`<${value}> no es un nombre de socket de procesador válido.`)
		}
	}
}
