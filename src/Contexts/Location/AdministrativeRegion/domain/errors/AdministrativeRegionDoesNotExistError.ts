import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * Custom error class for when a Administrative does not exist.
 * Extends ApiError to provide a standardized error response.
 */
export class AdministrativeRegionDoesNotExistError extends ApiError {
	/**
	 * Creates an instance of AdministrativeRegionDoesNotExistError.
	 * @param {string} value - The ID or identifier of the city that does not exist.
	 */
	constructor(public readonly value: string) {
		super(httpStatus[404].statusCode, `La zona administrativa con el id ${value} no existe`)
		this.name = this.constructor.name
	}
}
