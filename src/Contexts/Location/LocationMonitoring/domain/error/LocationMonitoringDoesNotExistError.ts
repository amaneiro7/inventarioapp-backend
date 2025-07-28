import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * Custom error class for when a Location Monitoring entry does not exist.
 * Extends ApiError to provide a standardized error response.
 */
export class LocationMonitoringDoesNotExistError extends ApiError {
	/**
	 * Creates an instance of LocationMonitoringDoesNotExistError.
	 * @param {string} value - The ID or identifier of the location monitoring entry that does not exist.
	 */
	constructor(public readonly value: string) {
		super(httpStatus[404].statusCode, `La ubicación con el ID ${value} no existe`)
	}
}
