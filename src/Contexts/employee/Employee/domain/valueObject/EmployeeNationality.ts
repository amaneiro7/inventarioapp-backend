import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'

/**
 * @enum Nationalities
 * @description Defines the accepted nationalities for an employee.
 */
export enum Nationalities {
	V = 'V',
	E = 'E'
}

/**
 * @description Represents the nationality of an employee.
 */
export class EmployeeNationality extends AcceptedNullValueObject<Nationalities> {
	constructor(value: Nationalities | null) {
		super(value)
		this.ensureIsValidNationality()
	}

	private ensureIsValidNationality(): void {
		if (this.value !== null && !Object.values(Nationalities).includes(this.value)) {
			throw new InvalidArgumentError(
				`Nacionalidad inválida: '${this.value}'. Las opciones válidas son: ${Object.values(Nationalities).join(', ')}.`
			) // Improved error message
		}
	}

	protected throwErrorForInvalidValue(): void {
		throw new InvalidArgumentError(`Nacionalidad inválida (uso interno): ${this.value}`)
	}
}
