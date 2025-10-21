import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when attempting to create a user with an email that already exists.
 */
export class UserAlreadyExistError extends ApiError {
	constructor(readonly email: string) {
		super(httpStatus[400].statusCode, `El usuario con el correo '${email}' ya existe.`)
	}
}
