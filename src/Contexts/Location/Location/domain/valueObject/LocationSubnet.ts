import { AcceptedNullStringValueObject } from '../../../../Shared/domain/value-object/AcceptedNullStringValueObject'
import { IPAddress } from '../../../../Shared/domain/value-object/IPAddress'
import { InvalidLocationSubnetError } from '../errors/InvalidLocationSubnetError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'

/**
 * Represents the subnet IP address of a Location as a value object.
 * It extends AcceptedNullStringValueObject, meaning its value can be a string or null.
 * Encapsulates validation logic for IP addresses.
 */
export class LocationSubnet extends AcceptedNullStringValueObject {
	/**
	 * Creates an instance of LocationSubnet.
	 * @param {string | null} value - The subnet IP address or null.
	 * @throws {InvalidArgumentError} If the provided value is not a valid IP address (and not null).
	 */
	constructor(readonly value: string | null) {
		super(value) // Call the constructor of the parent class

		this.ensureIsValid(value) // Ensure the provided value is a valid IP address
	}

	/**
	 * Converts the LocationSubnet value object to its primitive string or null representation.
	 * @returns {Primitives<LocationSubnet>} The string or null value of the subnet.
	 */
	toPrimitives(): Primitives<LocationSubnet> {
		return this.value
	}

	/**
	 * Private method to ensure the provided value is a valid IP address.
	 * @param {Primitives<LocationSubnet>} value - The value to validate.
	 * @throws {InvalidArgumentError} If the value is not a valid IP address (and not null).
	 */
	private ensureIsValid(value: Primitives<LocationSubnet>): void {
		if (value !== null && !IPAddress.isValid(value)) {
			throw new InvalidLocationSubnetError(value)
		}
	}
}
