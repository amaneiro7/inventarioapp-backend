import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { NumberValueObject } from '../../../../Shared/domain/value-object/NumberValueObject'

/**
 * @description Represents the health of a hard drive as a percentage.
 */
export class HardDriveHealth extends NumberValueObject {
	private readonly MIN_HEALTH = 0
	private readonly MAX_HEALTH = 100

	constructor(readonly value: number) {
		super(value)
		this.ensureIsValidRange(value)
		this.ensureLengthIsBiggerThan(this.MIN_HEALTH, this.value)
		this.ensureLengthIsSmallerThan(this.MAX_HEALTH, this.value)
	}

	private ensureIsValidRange(value: number): void {
		if (value < this.MIN_HEALTH || value > this.MAX_HEALTH) {
			throw new InvalidArgumentError(
				`<${value}> no es un porcentaje de salud válido. Debe estar entre ${this.MIN_HEALTH} y ${this.MAX_HEALTH}.`
			)
		}
	}
}
