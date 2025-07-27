import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when a role is not found.
 */
export class RoleDoesNotExistError extends ApiError {
	constructor() {
		super(httpStatus.NOT_FOUND, 'El rol no existe.')
	}
}
