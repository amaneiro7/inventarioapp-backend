import { type Primitives } from '../../Shared/domain/value-object/Primitives'
import { InvalidArgumentError } from '../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../Shared/domain/value-object/StringValueObject'
import { type IDepartment } from './IDeparment'

/**
 * @description Represents the name of a Department.
 */
export class DepartmentName extends StringValueObject {
	private readonly MIN_LENGTH = 3
	private readonly MAX_LENGTH = 100
	private readonly VALID_REGEX = /^[a-zA-ZÀ-ÿ0-9()\-.,\s]*$/

	constructor(readonly value: string) {
		super(value)
		this.ensureIsValidName(value)
	}

	private ensureIsValidName(value: string): void {
		const errors: string[] = []

		if (value.length < this.MIN_LENGTH || value.length > this.MAX_LENGTH) {
			errors.push(
				`Debe tener al menos ${this.MIN_LENGTH} caracteres y un máximo de ${this.MAX_LENGTH} caracteres.`
			)
		}
		if (!this.VALID_REGEX.test(value)) {
			errors.push('Solo se permiten caracteres alfanuméricos, paréntesis, guiones, puntos y comas.')
		}

		if (errors.length > 0) {
			throw new InvalidArgumentError(`El nombre del área '${value}' no es válido: ${errors.join(', ')}`)
		}
	}

	/**
	 * @description Handles the logic for updating the name field of a department.
	 * @param {{ name?: Primitives<DepartmentName>; entity: IDepartment }} params The parameters for updating.
	 */
	static updateNameField({ name, entity }: { name?: Primitives<DepartmentName>; entity: IDepartment }): void {
		if (name === undefined || entity.nameValue === name) {
			return
		}
		entity.updateName(name)
	}
}
