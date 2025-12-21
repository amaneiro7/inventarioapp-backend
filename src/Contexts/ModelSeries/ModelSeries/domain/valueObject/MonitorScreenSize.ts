import { NumberValueObject } from '../../../../Shared/domain/value-object/NumberValueObject'

/**
 * @description Represents the screen size of a monitor in inches.
 */
export class MonitorScreenSize extends NumberValueObject {
	private readonly MIN_SIZE = 11
	private readonly MAX_SIZE = 35

	constructor(readonly value: number) {
		super(value)
		this.ensureLengthIsBiggerThan(this.MIN_SIZE, this.value)
		this.ensureLengthIsLowerThan(this.MAX_SIZE, this.value)
	}
}
