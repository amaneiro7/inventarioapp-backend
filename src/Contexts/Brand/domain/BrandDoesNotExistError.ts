import { ApiError } from '../../Shared/domain/errors/ApiError'
import httpStatus from '../../Shared/infrastructure/utils/http-status'

/**
 * @class BrandDoesNotExistError
 * @extends ApiError
 * @description Custom error class for when a brand with a given ID does not exist.
 * This error should be thrown when an operation is attempted on a brand that is not found.
 */
export class BrandDoesNotExistError extends ApiError {
	/**
	 * @constructor
	 * @param {string} value - The ID of the brand that was not found.
	 */
	constructor(public readonly value: string) {
		super(httpStatus[404].statusCode, `La marca con el ID ${value} no existe`)
	}
}
