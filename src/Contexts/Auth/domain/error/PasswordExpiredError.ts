// En algún lugar como src/Contexts/Auth/domain/PasswordExpiredError.ts
import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error lanzado cuando la contraseña de un usuario ha expirado.
 * Incluye un token temporal que solo puede ser usado para cambiar la contraseña.
 */
export class PasswordExpiredError extends ApiError {
	constructor(temporaryToken: string) {
		const message = 'Tu contraseña ha expirado y debe ser cambiada.'
		const payload = { temporaryToken }
		super(httpStatus[403].statusCode, message, true, payload) // 403 Forbidden es más apropiado aquí
		this.name = 'PasswordExpiredError'
	}
}
