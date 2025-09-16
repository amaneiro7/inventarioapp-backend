import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when a user is not found.
 */
export class UserDoesNotExistError extends ApiError {
	constructor(public readonly email: string) {
		super(httpStatus[404].statusCode, `El usuario '${email}' no existe.`)
	}
}
