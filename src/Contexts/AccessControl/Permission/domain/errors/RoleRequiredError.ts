import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

export class RoleRequiredError extends ApiError {
	constructor() {
		super(httpStatus[403].statusCode, 'Usuario no tiene un rol asignado.')
		this.name = 'RoleRequiredError'
	}
}
