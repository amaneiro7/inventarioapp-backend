import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @class InputTypeDoesNotExistError
 * @extends ApiError
 * @description Error thrown when an operation is attempted on an input type that is not found in the database.
 */
export class InputTypeDoesNotExistError extends ApiError {
	/**
	 * @param {string} id The ID of the input type that was not found.
	 */
	constructor(public readonly id: string) {
		super(httpStatus[404].statusCode, `El tipo de entrada con el ID '${id}' no existe.`)
		this.name = this.constructor.name
	}
}
