import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'

/**
 * Represents the name of a City as a value object.
 * Encapsulates validation logic for city names and provides methods for updating and ensuring uniqueness.
 */
export class CityName extends StringValueObject {
	private readonly NAME_MAX_LENGTH = 100
	private readonly NAME_MIN_LENGTH = 3

	/**
	 * Creates an instance of CityName.
	 * @param {string} value - The name of the city.
	 */
	constructor(readonly value: string) {
		super(value)
		// Ensure the validity of the City name upon creation.
		this.ensureLengthIsBiggerThan(this.NAME_MIN_LENGTH, this.value)
		this.ensureLengthIsSmallerThan(this.NAME_MAX_LENGTH, this.value)
	}
}
