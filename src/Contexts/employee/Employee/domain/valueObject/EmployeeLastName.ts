import { InvalidArgumentError } from '../../../../Shared/domain/value-object/InvalidArgumentError'
import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { RegularEmployee } from '../entity/RegularEmployee'

export class EmployeeLastName extends StringValueObject {
	private readonly NAME_MAX_LENGTH = 50
	private readonly NAME_MIN_LENGTH = 3
	private readonly Regex =
		/^[A-ZÑñÁÉÍÓÚ][a-zñáéíóú]*(?: [A-ZÑñÁÉÍÓÚ][a-zñáéíóú]*)*$/

	constructor(readonly value: string) {
		super(value)

		this.ensureIsValidName(value)
	}

	private ensureIsValidName(value: string): void {
		// Create an empty array to store any validation errors
		const errors = []
		if (value.length < this.NAME_MIN_LENGTH) {
			errors.push(
				`El apellido debe ser mayor a ${this.NAME_MIN_LENGTH} caracteres`
			)
		}
		if (value.length > this.NAME_MAX_LENGTH) {
			errors.push(
				`El apellido debe ser menor a ${this.NAME_MAX_LENGTH} caracteres`
			)
		}
		if (!this.Regex.test(value)) {
			errors.push(
				`La primera letra debe ser en mayúsculas, el resto en minúsculas, y no puede tener espacios al final al menos que sea un apellido compuesto`
			)
		}

		if (errors.length > 0) {
			throw new InvalidArgumentError(errors.join(', '))
		}
	}

	static async updateNameField({
		name,
		entity
	}: {
		name?: Primitives<EmployeeLastName>
		entity: RegularEmployee
	}): Promise<void> {
		// Solo si se ha pasado un nuevo apellido y es diferente al actual se actualiza
		if (!!name && entity.nameValue !== name) {
			entity.updateName(name)
		}
	}
}
