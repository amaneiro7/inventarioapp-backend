import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { NumberValueObject } from '../../../../Shared/domain/value-object/NumberValueObject'

/**
 * @description Represents the value of a hard drive capacity.
 */
export class HardDriveCapacityValue extends NumberValueObject {
	private readonly ACCEPTED_VALUES: Set<number> = new Set([40, 80, 120, 160, 250, 320, 500, 750, 1000, 2000, 4000])

	constructor(readonly value: number) {
		super(value)
		this.ensureIsValidValue(value)
	}

	private ensureIsValidValue(value: number): void {
		if (!this.ACCEPTED_VALUES.has(value)) {
			throw new InvalidArgumentError(`<${value}> no es una capacidad de disco duro válida.`)
		}
	}
}
