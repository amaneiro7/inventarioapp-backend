import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

/**
 * @class MainCategoryDoesNotExistError
 * @extends ApiError
 * @description Error thrown when an operation is attempted on a main category that is not found in the database.
 */
export class MainCategoryDoesNotExistError extends ApiError {
	/**
	 * @param {string} id The ID of the main category that was not found.
	 */
	constructor(public readonly id: string) {
		super(httpStatus[404].statusCode, `La categoría principal con el ID '${id}' no existe.`)
	}
}
