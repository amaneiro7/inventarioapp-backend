import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { type Employee } from '../entity/Employee'
import { type EmployeeType, EmployeeTypes } from './EmployeeType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'

/**
 * @description Represents the first name of an employee.
 */
export class EmployeeName extends AcceptedNullValueObject<string> {
	private readonly MIN_LENGTH = 3
	private readonly MAX_LENGTH = 50
	private readonly VALID_REGEX = /^[A-ZÑñÁÉÍÓÚ][a-zñáéíóú]*(?: [A-ZÑñÁÉÍÓÚ][a-zñáéíóú]*)*$/

	constructor(
		value: string | null,
		private readonly type: Primitives<EmployeeType>
	) {
		super(value)
		if (value) {
			this.value = value?.trim()
		}
		this.ensureIsValidName({ value: this.value, type: this.type })
	}

	private ensureIsValidName({ value, type }: { value: string | null; type: Primitives<EmployeeType> }): void {
		const errors: string[] = []

		if (type !== EmployeeTypes.GENERIC && !value) {
			errors.push('El nombre es requerido para este tipo de empleado.')
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
					'La primera letra debe ser en mayúsculas, el resto en minúsculas, y no puede tener espacios al final a menos que sea un nombre compuesto.'
				)
			}
		}

		if (errors.length > 0) {
			throw new InvalidArgumentError(`El nombre del empleado '${value}' no es válido: ${errors.join(', ')}`)
		}
	}

	/**
	 * @description Handles the logic for updating the name field of an employee.
	 * @param {{ name?: Primitives<EmployeeName>; entity: Employee }} params The parameters for updating.
	 */
	static updateNameField({ name, entity }: { name?: Primitives<EmployeeName>; entity: Employee }): void {
		if (name !== undefined && entity.nameValue !== name) {
			entity.updateName(name, entity.typeValue)
		}
	}
}
