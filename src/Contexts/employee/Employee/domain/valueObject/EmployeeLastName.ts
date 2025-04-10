import { InvalidArgumentError } from '../../../../Shared/domain/value-object/InvalidArgumentError'
import { AcceptedNullValueObject } from '../../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeType, EmployeeTypes } from './EmployeeType'
import { type Employee } from '../entity/Employee'

export class EmployeeLastName extends AcceptedNullValueObject<string> {
	private readonly NAME_MAX_LENGTH = 50
	private readonly NAME_MIN_LENGTH = 3
	private readonly Regex = /^[A-ZÑñÁÉÍÓÚ][a-zñáéíóú]*(?: [A-ZÑñÁÉÍÓÚ][a-zñáéíóú]*)*$/

	constructor(value: string | null, private readonly type: Primitives<EmployeeType>) {
		super(value)

		this.ensureIsValidName({ value, type: this.type })
	}

	private ensureIsValidName({ value, type }: { value: string | null; type: Primitives<EmployeeType> }): void {
		// Create an empty array to store any validation errors
		const errors = []
		if (type !== EmployeeTypes.GENERIC && !value) {
			errors.push('El nombre es requerido para este tipo de empleado.')
		}
		if (value) {
			if (value.length < this.NAME_MIN_LENGTH) {
				errors.push(`El apellido debe ser mayor a ${this.NAME_MIN_LENGTH} caracteres`)
			}
			if (value.length > this.NAME_MAX_LENGTH) {
				errors.push(`El apellido debe ser menor a ${this.NAME_MAX_LENGTH} caracteres`)
			}
			if (!this.Regex.test(value)) {
				errors.push(
					`La primera letra debe ser en mayúsculas, el resto en minúsculas, y no puede tener espacios al final al menos que sea un apellido compuesto`
				)
			}
		}

		if (errors.length > 0) {
			throw new InvalidArgumentError(errors.join(', '))
		}
	}

	static async updateLastNameField({
		lastName,
		entity
	}: {
		lastName?: Primitives<EmployeeLastName>
		entity: Employee
	}): Promise<void> {
		// Solo si se ha pasado un nuevo apellido y es diferente al actual se actualiza
		if (lastName !== undefined && entity.lastNameValue !== lastName) {
			entity.updateLastName(lastName, entity.typeValue)
		}
	}
}
