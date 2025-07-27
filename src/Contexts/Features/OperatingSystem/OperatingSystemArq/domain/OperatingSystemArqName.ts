import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'

/**
 * @description Represents the name of an operating system architecture.
 */
export class OperatingSystemArqName extends StringValueObject {
	private readonly ACCEPTED_VALUES: Set<string> = new Set(['x86', 'x64'])

	constructor(readonly value: string) {
		super(value)
		this.ensureIsValidName(value)
	}

	private ensureIsValidName(value: string): void {
		if (!this.ACCEPTED_VALUES.has(value)) {
			throw new InvalidArgumentError(`<${value}> no es una arquitectura de sistema operativo válida.`)
		}
	}
}
