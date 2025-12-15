import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { AcceptedNullStringValueObject } from '../../../../Shared/domain/value-object/AcceptedNullStringValueObject'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeType, EmployeeTypesEnum } from './EmployeeType'
import { type Employee } from '../entity/Employee'

/**
 * @description Represents the last name of an employee.
 */
export class EmployeeLastName extends AcceptedNullStringValueObject {
	private readonly MIN_LENGTH = 3
	private readonly MAX_LENGTH = 50
	private readonly VALID_REGEX = /^[A-ZÑñÁÉÍÓÚ][a-zñáéíóú]*(?: [A-ZÑñÁÉÍÓÚ][a-zñáéíóú]*)*$/

	constructor(
		value: string | null,
		private readonly type: Primitives<EmployeeType>
	) {
		super(value)
		this.ensureIsValidName({ value: this.value, type: this.type })
	}

	private ensureIsValidName({ value, type }: { value: string | null; type: Primitives<EmployeeType> }): void {
		const errors: string[] = []

		if (type !== EmployeeTypesEnum.GENERIC && !value) {
			errors.push('El apellido es requerido para este tipo de empleado.')
		}

		if (value) {
			if (value.length < this.MIN_LENGTH) {
				errors.push(`Debe ser mayor a ${this.MIN_LENGTH} caracteres.`)
			}
			if (value.length > this.MAX_LENGTH) {
				errors.push(`Debe ser menor a ${this.MAX_LENGTH} caracteres.`)
			}
			if (!this.VALID_REGEX.test(value)) {
				errors.push(
					'La primera letra debe ser en mayúsculas, el resto en minúsculas, y no puede tener espacios al final a menos que sea un apellido compuesto.'
				)
			}
		}

		if (errors.length > 0) {
			throw new InvalidArgumentError(`El apellido del empleado '${value}' no es válido: ${errors.join(', ')}`)
		}
	}

	/**
	 * @description Handles the logic for updating the last name field of an employee.
	 * @param {{ lastName?: Primitives<EmployeeLastName>; entity: Employee }} params The parameters for updating.
	 */
	static updateLastNameField({
		lastName,
		entity
	}: {
		lastName?: Primitives<EmployeeLastName>
		entity: Employee
	}): void {
		if (lastName !== undefined && entity.lastNameValue !== lastName) {
			entity.updateLastName(lastName, entity.typeValue)
		}
	}
}
