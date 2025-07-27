import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

/**
 * @class StatusAlreadyExistError
 * @extends ApiError
 * @description Error thrown when attempting to create a status that already exists.
 */
export class StatusAlreadyExistError extends ApiError {
	/**
	 * @param {string} name The name of the status that already exists.
	 */
	constructor(readonly name: string) {
		super(httpStatus[400].statusCode, `El estatus '${name}' ya existe.`)
	}
}
