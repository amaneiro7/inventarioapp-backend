import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeType, EmployeeTypesEnum } from './EmployeeType'

/**
 * @enum Nationalities
 * @description Defines the accepted nationalities for an employee.
 */
export enum Nationalities {
	V = 'V',
	E = 'E'
}

interface EmployeeNationalityProps {
	value: Nationalities | null
	type: Primitives<EmployeeType>
}

/**
 * @description Represents the nationality of an employee.
 */
export class EmployeeNationality extends AcceptedNullValueObject<Nationalities> {
	constructor(
		value: Nationalities | null,
		private readonly type: Primitives<EmployeeType>
	) {
		super(value)
		this.ensureIsValidNationality({ value, type: this.type })
	}

	private ensureIsValidNationality({ value, type }: EmployeeNationalityProps): void {
		if (type !== EmployeeTypesEnum.GENERIC && value === null) {
			throw new InvalidArgumentError('La nacionalidad del empleado es requerida para este tipo de empleado.')
		}

		if (value !== null && !Object.values(Nationalities).includes(value)) {
			throw new InvalidArgumentError(
				`Nacionalidad inválida: '${value}'. Las opciones válidas son: ${Object.values(Nationalities).join(', ')}.`
			) // Improved error message
		}
	}

	protected throwErrorForInvalidValue(value: Nationalities): void {
		throw new InvalidArgumentError(`Nacionalidad inválida (uso interno): ${value}`)
	}
}
