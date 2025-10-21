import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when a user is not found.
 */
export class UserDoesNotExistError extends ApiError {
	constructor(public readonly id: string) {
		// Changed from email to id
		super(httpStatus[404].statusCode, `El usuario con ID '${id}' no existe.`) // Updated message
	}
}
