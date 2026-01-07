import { InvalidArgumentError } from '../../../../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../../../../Shared/domain/value-object/StringValueObject'

/**
 * @description Represents the name of a hard drive type.
 */
export class HardDriveTypeName extends StringValueObject {
	private readonly ACCEPTED_VALUES: Set<string> = new Set(['HDD', 'SDD', 'SDD M.2', 'IDE'])

	constructor(readonly value: string) {
		super(value)
		this.ensureIsValidName(value)
	}

	private ensureIsValidName(value: string): void {
		if (!this.ACCEPTED_VALUES.has(value)) {
			throw new InvalidArgumentError(`<${value}> no es un tipo de disco duro válido.`)
		}
	}
}
