import { InvalidArgumentError } from '../../../Shared/domain/value-object/InvalidArgumentError'
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'

// Define a class for representing a Venezuela AdministrativeRegion as a value object
export class AdministrativeRegionName extends StringValueObject {
	// Define a constant map of accepted AdministrativeRegion names
	private readonly ACCEPTED_VALUES: Record<string, string> = {
		CAPITAL: 'Sop. Técnico Región Capital',
		OCCIDENTE: 'Occidente'
	}

	constructor(readonly value: string) {
		super(value)
		// Ensure the validity of the AdministrativeRegion
		this.ensureIsValidName(value)
	}

	// Convert to its primitive representation
	toPrimitives(): string {
		return this.value
	}

	// Ensure the validity of the name
	private ensureIsValidName(value: string): void {
		if (this.isValid(value)) {
			throw new InvalidArgumentError(`<${value}> is not a valid Administrative Region`)
		}
	}

	// Check if the Operating System Version value is valid
	private isValid(value: string): boolean {
		// Check if the value is in the accepted values
		return Object.values(this.ACCEPTED_VALUES).includes(value)
	}
}
