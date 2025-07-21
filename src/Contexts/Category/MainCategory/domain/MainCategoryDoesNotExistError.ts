import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

/**
 * Error thrown when a main category is not found.
 *
 * @export
 * @class MainCategoryDoesNotExistError
 * @extends {ApiError}
 */
export class MainCategoryDoesNotExistError extends ApiError {
	/**
	 * Creates an instance of MainCategoryDoesNotExistError.
	 * @param {string} value - The identifier of the main category that does not exist.
	 */
	constructor(public readonly value: string) {
		super(httpStatus[404].statusCode, `La categoria no existe`)
	}
}
