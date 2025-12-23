import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'

/**
 * Represents the name of an Administrative Region as a value object.
 * Ensures the name is one of the predefined accepted values.
 */
export class AdministrativeRegionName extends StringValueObject {
	/**
	 * Defines a constant map of accepted Administrative Region names.
	 * These are the only valid names for administrative regions.
	 */
	private readonly ACCEPTED_VALUES: Record<string, string> = {
		CAPITAL: 'Sop. Técnico Región Capital',
		OCCIDENTE: 'Occidente'
	}

	/**
	 * Creates an instance of AdministrativeRegionName.
	 * @param {string} value - The name of the administrative region.
	 * @throws {InvalidArgumentError} If the provided value is not a valid administrative region name.
	 */
	constructor(readonly value: string) {
		super(value)
		// Ensure the validity of the AdministrativeRegion name upon creation.
		this.ensureIsValidName(value)
	}

	/**
	 * Converts the AdministrativeRegionName value object to its primitive string representation.
	 * @returns {string} The string value of the administrative region name.
	 */
	toPrimitives(): string {
		return this.value
	}

	/**
	 * Ensures that the provided name is a valid Administrative Region name.
	 * @param {string} value - The name to validate.
	 * @throws {InvalidArgumentError} If the value is not found in the ACCEPTED_VALUES.
	 */
	private ensureIsValidName(value: string): void {
		if (!this.isValid(value)) {
			throw new InvalidArgumentError(`<${value}> is not a valid Administrative Region`)
		}
	}

	/**
	 * Checks if the provided value is one of the accepted Administrative Region names.
	 * @param {string} value - The name to check.
	 * @returns {boolean} True if the value is valid, false otherwise.
	 */
	private isValid(value: string): boolean {
		// Check if the value is in the accepted values
		return Object.values(this.ACCEPTED_VALUES).includes(value)
	}
}
