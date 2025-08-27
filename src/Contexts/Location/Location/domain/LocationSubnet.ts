import { AcceptedNullValueObject } from '../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { Primitives } from '../../../Shared/domain/value-object/Primitives'
import { Location } from './Location'

/**
 * Represents the subnet IP address of a Location as a value object.
 * It extends AcceptedNullValueObject<string>, meaning its value can be a string or null.
 * Encapsulates validation logic for IP addresses.
 */
export class LocationSubnet extends AcceptedNullValueObject<string> {
	// Define a private regular expression for IP address validation
	private readonly IPADRRESS_VALIDATION =
		/^([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])){3}$/

	/**
	 * Creates an instance of LocationSubnet.
	 * @param {string | null} value - The subnet IP address or null.
	 * @throws {InvalidArgumentError} If the provided value is not a valid IP address (and not null).
	 */ constructor(readonly value: string | null) {
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
		if (!this.isValid(value)) {
			throw new InvalidArgumentError(`this <${value}> is not a valid Subnet`) // Throw an error if the value is not a valid IP address
		}
	}

	/**
	 * Private method to check if the provided value is a valid IP address using the defined regular expression.
	 * @param {Primitives<LocationSubnet>} value - The value to check.
	 * @returns {boolean} True if the value is a valid IP address or null, false otherwise.
	 */
	private isValid(value: Primitives<LocationSubnet>): boolean {
		if (value === null) return true
		return this.IPADRRESS_VALIDATION.test(value)
	}

	/**
	 * Updates the subnet field of a Location entity.
	 * @param {{ subnet?: Primitives<LocationSubnet>; entity: Location }} params - Parameters for updating the subnet.
	 * @param {Primitives<LocationSubnet>} [params.subnet] - The new subnet for the location (optional).
	 * @param {Location} params.entity - The Location entity to update.
	 * @returns {Promise<void>} A promise that resolves when the subnet is updated or no action is needed.
	 */
	static async updateSubnetField({
		subnet,
		entity
	}: {
		subnet?: Primitives<LocationSubnet>
		entity: Location
	}): Promise<void> {
		if (subnet === undefined) {
			return
		}

		if (entity.subnetValue === subnet) {
			return
		}

		entity.updateSubnet(subnet)
	}
}
