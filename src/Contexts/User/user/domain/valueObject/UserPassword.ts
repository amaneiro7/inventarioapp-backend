import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'
import { PasswordService } from '../domainService/PasswordService'

/**
 * @description Represents a user's password.
 */
export class UserPassword extends StringValueObject {
	private readonly MIN_LENGTH = 8
	private readonly HAS_UPPERCASE = /[A-Z]/
	private readonly HAS_LOWERCASE = /[a-z]/
	private readonly HAS_NUMBER = /\d/
	private readonly HAS_SPECIAL_CHARACTER = /[!@#$%^&()*.]/

	static readonly defaultPassword = 'Avion01.'

	constructor(
		readonly value: string,
		fromPrimitives = false
	) {
		super(value)
		if (!fromPrimitives) {
			this.ensureIsValidPassword(value)
			this.value = PasswordService.hash(this.value) // Hash the password before storing
		}
	}

	private ensureIsValidPassword(value: string): void {
		const errors: string[] = []

		if (value.length < this.MIN_LENGTH) {
			errors.push('La contraseña debe tener al menos 8 caracteres.')
		}
		if (!this.HAS_UPPERCASE.test(value)) {
			errors.push('La contraseña debe contener al menos una letra mayúscula.')
		}
		if (!this.HAS_LOWERCASE.test(value)) {
			errors.push('La contraseña debe contener al menos una letra minúscula.')
		}
		if (!this.HAS_NUMBER.test(value)) {
			errors.push('La contraseña debe contener al menos un número.')
		}
		if (!this.HAS_SPECIAL_CHARACTER.test(value)) {
			errors.push('La contraseña debe contener al menos un carácter especial.')
		}

		if (errors.length > 0) {
			throw new InvalidArgumentError(`Contraseña inválida: ${errors.join(' ')}`)
		}
	}
}
