import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

/**
 * @class CategoryDoesNotExistError
 * @extends ApiError
 * @description Error thrown when an operation is attempted on a category that is not found in the database.
 */
export class CategoryDoesNotExistError extends ApiError {
	/**
	 * @param {string} id The ID of the category that was not found.
	 */
	constructor(public readonly id: string) {
		super(httpStatus[404].statusCode, `La subcategoría con el ID '${id}' no existe.`)
	}
}
