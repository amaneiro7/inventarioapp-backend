import httpStatus from '../../Shared/infrastructure/utils/http-status'
import { ApiError } from '../../Shared/domain/errors/ApiError'

/**
 * @class InvalidCredentialsError
 * @extends ApiError
 * @description Error thrown when a user provides incorrect credentials (e.g., wrong email or password).
 * This error results in a `403 Forbidden` HTTP status code.
 */
export class InvalidCredentialsError extends ApiError {
	constructor() {
		super(httpStatus[403].statusCode, 'Usuario o contraseña incorrectos.')
	}
}
