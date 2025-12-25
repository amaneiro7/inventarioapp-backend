import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * Custom error class for when a Location name already exists.
 * Extends ApiError to provide a standardized error response.
 */
export class LocationNameAlreadyExistError extends ApiError {
	/**
	 * Creates an instance of LocationNameAlreadyExistError.
	 * @param {string} name - The name of the location that already exists.
	 */
	constructor(readonly name: string) {
		super(httpStatus[400].statusCode, `El nombre de ubicación ${name} ya existe`)
		this.name = 'LocationNameAlreadyExistError'
	}
}
