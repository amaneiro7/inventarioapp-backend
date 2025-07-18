import httpStatus from '../../Shared/infrastructure/utils/http-status'
import { ApiError } from '../../Shared/domain/errors/ApiError'

export class InvalidCredentialsError extends ApiError {
	constructor() {
		super(httpStatus.FORBIDDEN, 'Usuario o contraseña incorrectos.')
	}
}
