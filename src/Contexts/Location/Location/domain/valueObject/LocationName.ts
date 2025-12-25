import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'

/**
 * Represents the name of a Location as a value object.
 * Encapsulates validation logic for location names and provides methods for updating and ensuring uniqueness.
 */
export class LocationName extends StringValueObject {
	private readonly NAME_MAX_LENGTH = 100
	private readonly NAME_MIN_LENGTH = 3
	private readonly regex = /^[a-zA-ZÀ-ÿ0-9()\-.,\s]*$/

	/**
	 * Creates an instance of LocationName.
	 * @param {string} value - The name of the location.
	 */
	constructor(readonly value: string) {
		super(value)

		this.ensureLengthIsBiggerThan(this.NAME_MIN_LENGTH, this.value)
		this.ensureLengthIsSmallerThan(this.NAME_MAX_LENGTH, this.value)
		this.ensureMatchesPattern(this.regex, this.value)
	}
}
