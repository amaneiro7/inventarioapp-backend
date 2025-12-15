import { AcceptedNullStringValueObject } from '../../../../Shared/domain/value-object/AcceptedNullStringValueObject'
import { type Employee } from '../entity/Employee'
import { type EmployeeType, EmployeeTypesEnum } from './EmployeeType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { EmployeeNameInvalidError } from '../Errors/EmployeeNameInvalidError'

/**
 * @description Represents the first name of an employee.
 */
export class EmployeeName extends AcceptedNullStringValueObject {
	private readonly MIN_LENGTH = 3
	private readonly MAX_LENGTH = 50
	private readonly VALID_REGEX = /^[A-ZÑñÁÉÍÓÚ][a-zñáéíóú]*(?: [A-ZÑñÁÉÍÓÚ][a-zñáéíóú]*)*$/

	constructor(
		value: string | null,
		private readonly type: Primitives<EmployeeType>
	) {
		super(value)
		this.ensureIsValidName()
	}

	private ensureIsValidName(): void {
		const errors: string[] = []

		if (this.type !== EmployeeTypesEnum.GENERIC && this.value === null) {
			errors.push('El nombre es requerido para este tipo de empleado.')
		}

		if (this.value) {
			if (this.value.length < this.MIN_LENGTH) {
				errors.push(`Debe ser mayor a ${this.MIN_LENGTH} caracteres.`)
			}
			if (this.value.length > this.MAX_LENGTH) {
				errors.push(`Debe ser menor a ${this.MAX_LENGTH} caracteres.`)
			}
			if (!this.VALID_REGEX.test(this.value)) {
				errors.push(
					'La primera letra debe ser en mayúsculas, el resto en minúsculas, y no puede tener espacios al final a menos que sea un nombre compuesto.'
				)
			}
		}

		if (errors.length > 0) {
			throw new EmployeeNameInvalidError(this.value, errors)
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
