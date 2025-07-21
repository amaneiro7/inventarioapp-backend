import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

/**
 * Error thrown when a category is not found.
 *
 * @export
 * @class CategoryDoesNotExistError
 * @extends {ApiError}
 */
export class CategoryDoesNotExistError extends ApiError {
	/**
	 * Creates an instance of CategoryDoesNotExistError.
	 * @param {string} value - The identifier of the category that does not exist.
	 */
	constructor(public readonly value: string) {
		super(httpStatus[404].statusCode, `La sub categoria ${value} no existe`)
	}
}
