import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type LocationStatusId } from '../valueObject/LocationStatusId'

import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * Custom error class for when a Location Status ID does not exist.
 * Extends ApiError to provide a standardized error response.
 */
export class LocationStatusIdDoesNotExistError extends ApiError {
	/**
	 * Creates an instance of LocationStatusIdDoesNotExistError.
	 * @param {Primitives<LocationStatusId>} value - The ID of the location status that does not exist.
	 */
	constructor(public readonly value?: Primitives<LocationStatusId>) {
		super(httpStatus[404].statusCode, `El estatus no existe`)
		this.name = this.constructor.name
	}
}
