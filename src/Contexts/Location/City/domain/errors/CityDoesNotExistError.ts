import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * Custom error class for when a City does not exist.
 * Extends ApiError to provide a standardized error response.
 */
export class CityDoesNotExistError extends ApiError {
	/**
	 * Creates an instance of CityDoesNotExistError.
	 * @param {string} value - The ID or identifier of the city that does not exist.
	 */
	constructor(public readonly value: string) {
		super(httpStatus[404].statusCode, `La ciudad ${value} no existe`)
		this.name = this.constructor.name
	}
}
