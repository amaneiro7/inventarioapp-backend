import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * Custom error class for when a City with the given name already exists.
 * Extends ApiError to provide a standardized error response.
 */
export class CityAlreadyExistError extends ApiError {
	/**
	 * Creates an instance of CityAlreadyExistError.
	 * @param {string} name - The name of the city that already exists.
	 */
	constructor(readonly name: string) {
		super(httpStatus[400].statusCode, `La ciudad ${name} ya existe`)
		this.name = this.constructor.name
	}
}
