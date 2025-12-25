import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * Custom error class for when a Region does not exist.
 * Extends ApiError to provide a standardized error response.
 */
export class RegionDoesNotExistError extends ApiError {
	/**
	 * Creates an instance of RegionDoesNotExistError.
	 * @param {string} value - The ID or identifier of the region that does not exist.
	 */
	constructor(public readonly value: string) {
		super(httpStatus[404].statusCode, `La región ${value} no existe`)
	}
}
