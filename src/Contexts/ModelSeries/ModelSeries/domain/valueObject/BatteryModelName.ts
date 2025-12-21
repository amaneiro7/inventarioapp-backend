import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'

/**
 * @description Represents the model name of a battery.
 */
export class BatteryModelName extends StringValueObject {
	private readonly MIN_LENGTH = 3
	private readonly MAX_LENGTH = 20
	private readonly VALID_FORMAT = /^[a-zA-Z0-9-]+$/

	constructor(readonly value: string) {
		super(value)
		this.ensureLengthIsBiggerThan(this.MIN_LENGTH, this.value)
		this.ensureLengthIsLowerThan(this.MAX_LENGTH, this.value)
		this.ensureMatchesPattern(this.VALID_FORMAT, this.value)
	}
}
