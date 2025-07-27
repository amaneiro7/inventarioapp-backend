import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'
import { type User } from './User'

/**
 * @description Represents the first name of a user.
 */
export class UserName extends StringValueObject {
	private readonly MIN_LENGTH = 3
	private readonly MAX_LENGTH = 50
	private readonly VALID_REGEX = /^[A-ZÑñÁÉÍÓÚ][a-zñáéíóú]*(?: [A-ZÑñÁÉÍÓÚ][a-zñáéíóú]*)*$/

	constructor(readonly value: string) {
		super(value)
		this.ensureIsValidName(value)
	}

	private ensureIsValidName(value: string): void {
		const errors: string[] = []

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

		if (errors.length > 0) {
			throw new InvalidArgumentError(`El nombre del usuario '${value}' no es válido: ${errors.join(', ')}`)
		}
	}

	/**
	 * @description Handles the logic for updating the name field of a user.
	 * @param {{ name?: Primitives<UserName>; entity: User }} params The parameters for updating.
	 */
	static updateNameField({ name, entity }: { name?: Primitives<UserName>; entity: User }): void {
		if (name === undefined || entity.nameValue === name) {
			return
		}
		entity.updateName(name)
	}
}
