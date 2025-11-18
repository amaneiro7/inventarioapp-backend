import httpStatus from '../../../Shared/infrastructure/utils/http-status'
import { ApiError } from '../../../Shared/domain/errors/ApiError'

/**
 * @class InvalidCredentialsError
 * @extends ApiError
 * @description Error thrown when a user provides incorrect credentials (e.g., wrong email or password).
 * This error results in a `401 Unauthorized` HTTP status code.
 */
export class AccountLockedError extends ApiError {
	constructor(lockoutUntil?: Date | null) {
		const defaultMessage = 'Tu cuenta ha sido bloqueada temporalmente.'

		let message = defaultMessage
		if (lockoutUntil) {
			// Formatear la fecha para que sea legible
			// Nota: Se asume que tienes una utilidad de formato de fecha.
			// Si no, puedes usar toLocaleTimeString/DateString.
			const unlockTime = lockoutUntil.toLocaleTimeString('es-ES', {
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit'
			})
			const unlockDate = lockoutUntil.toLocaleDateString('es-ES', {
				day: '2-digit',
				month: 'short'
			})

			message = `${defaultMessage} Por favor, inténtalo de nuevo el ${unlockDate} a las ${unlockTime}.`
		}
		super(httpStatus[403].statusCode, message)
	}
}
