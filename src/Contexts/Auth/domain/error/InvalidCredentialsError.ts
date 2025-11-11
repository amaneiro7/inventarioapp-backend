import httpStatus from '../../../Shared/infrastructure/utils/http-status'
import { ApiError } from '../../../Shared/domain/errors/ApiError'

/**
 * @class InvalidCredentialsError
 * @extends ApiError
 * @description Error thrown when a user provides incorrect credentials (e.g., wrong email or password).
 * This error results in a `401 Unauthorized` HTTP status code.
 */
export class InvalidCredentialsError extends ApiError {
	constructor(message?: string) {
		super(httpStatus[401].statusCode, message ?? 'Usuario o contraseña incorrectos.')
	}
}
