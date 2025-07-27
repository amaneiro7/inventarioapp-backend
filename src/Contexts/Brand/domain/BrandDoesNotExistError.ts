import { ApiError } from '../../Shared/domain/errors/ApiError'
import httpStatus from '../../Shared/infrastructure/utils/http-status'

/**
 * @class BrandDoesNotExistError
 * @extends ApiError
 * @description Error thrown when an operation is attempted on a brand that is not found in the database.
 */
export class BrandDoesNotExistError extends ApiError {
	/**
	 * @param {string} id The ID of the brand that was not found.
	 */
	constructor(public readonly id: string) {
		super(httpStatus[404].statusCode, `La marca con el ID '${id}' no existe.`)
	}
}
