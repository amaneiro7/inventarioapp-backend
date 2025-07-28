import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { SiteId } from './SiteId'
import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

/**
 * Custom error class for when a Site does not exist.
 * Extends ApiError to provide a standardized error response.
 */
export class SiteDoesNotExistError extends ApiError {
	/**
	 * Creates an instance of SiteDoesNotExistError.
	 * @param {Primitives<SiteId>} value - The ID of the site that does not exist.
	 */
	constructor(public readonly value: Primitives<SiteId>) {
		super(httpStatus[404].statusCode, `El sitio no existe`)
	}
}
