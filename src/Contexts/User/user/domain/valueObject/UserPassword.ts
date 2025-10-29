import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject'
import { PasswordService } from '../domainService/PasswordService'

/**
 * @description Represents a user's password.
 */
export class UserPassword extends StringValueObject {
	private static readonly MIN_LENGTH = 8
	private static readonly HAS_UPPERCASE = /[A-Z]/
	private static readonly HAS_LOWERCASE = /[a-z]/
	private static readonly HAS_NUMBER = /\d/
	private static readonly HAS_SPECIAL_CHARACTER = /[!@#$%^&()*.]/

	static readonly defaultPassword = 'Avion01.'

	// El constructor ahora es privado para forzar el uso de los métodos estáticos.
	private constructor(readonly value: string) {
		super(value)
	}

	/**
	 * @description Crea una instancia de UserPassword a partir de una contraseña en texto plano.
	 * Valida y hashea la contraseña.
	 * @param {string} plainPassword - La contraseña en texto plano.
	 * @returns {UserPassword}
	 */
	public static create(plainPassword: string): UserPassword {
		this.ensureIsValidPassword(plainPassword)
		const hashedPassword = PasswordService.hash(plainPassword)
		return new UserPassword(hashedPassword)
	}

	/**
	 * @description Crea una instancia de UserPassword a partir de un hash existente (desde la base de datos).
	 * No realiza validación ni hasheo.
	 * @param {string} hashedPassword - La contraseña ya hasheada.
	 */
	public static fromPrimitives(hashedPassword: string): UserPassword {
		return new UserPassword(hashedPassword)
	}

	private static ensureIsValidPassword(value: string): void {
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
