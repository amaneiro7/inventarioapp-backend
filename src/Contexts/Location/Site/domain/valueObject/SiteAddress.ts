import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'

/**
 * Represents the address of a Site as a value object.
 * Encapsulates validation logic for site addresses and provides a method for updating.
 */
export class SiteAddress extends StringValueObject {
	private readonly NAME_MAX_LENGTH = 100
	private readonly NAME_MIN_LENGTH = 15

	/**
	 * Creates an instance of SiteAddress.
	 * @param {string} value - The address of the site.
	 * @throws {InvalidArgumentError} If the provided value is not a valid site address.
	 */
	constructor(readonly value: string) {
		super(value)

		this.ensureLengthIsBiggerThan(this.NAME_MIN_LENGTH, this.value)
		this.ensureLengthIsSmallerThan(this.NAME_MAX_LENGTH, this.value)
	}
}
