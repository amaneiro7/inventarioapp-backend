import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type LocationId } from './LocationId'
import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

/**
 * Custom error class for when a Location does not exist.
 * Extends ApiError to provide a standardized error response.
 */
export class LocationDoesNotExistError extends ApiError {
	/**
	 * Creates an instance of LocationDoesNotExistError.
	 * @param {Primitives<LocationId>} value - The ID of the location that does not exist.
	 */
	constructor(public readonly value: Primitives<LocationId>) {
		super(httpStatus[404].statusCode, `The location ${value} does not exist`)
	}
}
