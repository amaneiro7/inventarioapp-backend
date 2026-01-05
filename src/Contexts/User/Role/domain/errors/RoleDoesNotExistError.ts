import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when a role is not found.
 */
export class RoleDoesNotExistError extends ApiError {
	constructor() {
		super(httpStatus[404].statusCode, 'El rol no existe.')
	}
}
