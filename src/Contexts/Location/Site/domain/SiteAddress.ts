import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'
import { Site } from './Site'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

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

		this.ensureIsValidSerial(value)
	}

	/**
	 * Converts the SiteAddress value object to its primitive string representation.
	 * @returns {string} The string value of the site address.
	 */
	toPrimitives(): string {
		return this.value
	}

	/**
	 * Ensures that the provided value is a valid site address based on length constraints.
	 * @param {string} value - The address to validate.
	 * @throws {InvalidArgumentError} If the value does not meet the length requirements.
	 */
	private ensureIsValidSerial(value: string): void {
		if (!this.isValid(value)) {
			throw new InvalidArgumentError(`<${value}> is not a valid site address`)
		}
	}

	/**
	 * Checks if the provided address meets the length requirements.
	 * @param {string} name - The address to check.
	 * @returns {boolean} True if the length is valid, false otherwise.
	 */
	private isValid(name: string): boolean {
		return name.length >= this.NAME_MIN_LENGTH && name.length <= this.NAME_MAX_LENGTH
	}

	/**
	 * Updates the address field of a Site entity.
	 * @param {{ address?: Primitives<SiteAddress>; entity: Site }} params - Parameters for updating the address.
	 * @param {Primitives<SiteAddress>} [params.address] - The new address for the site (optional).
	 * @param {Site} params.entity - The Site entity to update.
	 * @returns {Promise<void>} A promise that resolves when the address is updated or no action is needed.
	 */
	static async updateAddressField({
		address,
		entity
	}: {
		address?: Primitives<SiteAddress>
		entity: Site
	}): Promise<void> {
		if (address === undefined) {
			return
		}

		if (entity.nameValue === address) {
			return
		}

		entity.updateAddress(address)
	}
}
