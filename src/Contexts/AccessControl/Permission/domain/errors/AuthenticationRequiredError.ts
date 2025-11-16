import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

export class AuthenticationRequiredError extends ApiError {
	constructor() {
		super(httpStatus[401].statusCode, 'Autenticación requerida. Por favor, inicie sesión.')
		this.name = 'AuthenticationRequiredError'
	}
}
