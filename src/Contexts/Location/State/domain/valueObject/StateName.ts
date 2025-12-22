import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'

/**
 * Represents the name of a State as a value object.
 * Ensures the name is one of the predefined accepted values.
 */

export class StateName extends StringValueObject {
	/**
	 * Defines a constant map of accepted state names.
	 * These are the only valid names for states.
	 */
	private readonly ACCEPTED_VALUES: Record<string, string> = {
		AMAZONAS: 'Amazonas',
		ANZOÁTEGUI: 'Anzoátegui',
		APURE: 'Apure',
		ARAGUA: 'Aragua',
		BARINAS: 'Barinas',
		BOLÍVAR: 'Bolívar',
		CARABOBO: 'Carabobo',
		COJEDES: 'Cojedes',
		DELTAAMACURO: 'Delta Amacuro',
		FALCÓN: 'Falcón',
		GUÁRICO: 'Guárico',
		LARA: 'Lara',
		MÉRIDA: 'Mérida',
		MIRANDA: 'Miranda',
		MONAGAS: 'Monagas',
		NUEVAESPARTA: 'Nueva Esparta',
		PORTUGUESA: 'Portuguesa',
		SUCRE: 'Sucre',
		TÁCHIRA: 'Táchira',
		TRUJILLO: 'Trujillo',
		VARGAS: 'Vargas',
		YARACUY: 'Yaracuy',
		ZULIA: 'Zulia'
	}

	/**
	 * Creates an instance of StateName.
	 * @param {string} value - The name of the state.
	 * @throws {InvalidArgumentError} If the provided value is not a valid state name.
	 */
	constructor(readonly value: string) {
		super(value)
		// Ensure the validity of the State name upon creation.
		this.ensureIsValidName(value)
	}

	/**
	 * Converts the StateName value object to its primitive string representation.
	 * @returns {string} The string value of the state name.
	 */
	toPrimitives(): string {
		return this.value
	}

	/**
	 * Ensures that the provided name is a valid State name.
	 * @param {string} value - The name to validate.
	 * @throws {InvalidArgumentError} If the value is not found in the ACCEPTED_VALUES.
	 */
	private ensureIsValidName(value: string): void {
		if (this.isValid(value)) {
			throw new InvalidArgumentError(`<${value}> is not a valid State`)
		}
	}

	/**
	 * Checks if the provided value is one of the accepted state names.
	 * @param {string} value - The name to check.
	 * @returns {boolean} True if the value is valid, false otherwise.
	 */
	private isValid(value: string): boolean {
		// Check if the value is in the accepted values
		return Object.values(this.ACCEPTED_VALUES).includes(value)
	}
}
