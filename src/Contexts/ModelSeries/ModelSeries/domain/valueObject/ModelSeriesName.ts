import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'

/**
 * @description Represents the name of a model series.
 */
export class ModelSeriesName extends StringValueObject {
	private readonly MIN_LENGTH = 2
	private readonly MAX_LENGTH = 100
	/**
	 * Allows alphanumeric characters, spaces, dots (.), and hyphens (-).
	 * Example matches: "ThinkPad X1", "v2.0", "Model-A"
	 */
	private readonly VALID_FORMAT = /^[a-zA-Z0-9\s.-]+$/

	constructor(readonly value: string) {
		super(value)
		this.ensureLengthIsBiggerThan(this.MIN_LENGTH, this.value)
		this.ensureLengthIsSmallerThan(this.MAX_LENGTH, this.value)
		this.ensureMatchesPattern(this.VALID_FORMAT, this.value)
	}
}
