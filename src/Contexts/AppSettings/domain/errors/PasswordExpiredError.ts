import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class PasswordExpiredError extends ApiError {
	constructor() {
		super(httpStatus[403].statusCode, 'La contraseña ha expirado. Por favor, cámbiala.')
	}
}
