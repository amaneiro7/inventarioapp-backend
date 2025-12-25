import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * Custom error class for when a Site with the given name already exists.
 * Extends ApiError to provide a standardized error response.
 */
export class SiteAlreadyExistError extends ApiError {
	/**
	 * Creates an instance of SiteAlreadyExistError.
	 * @param {string} name - The name of the site that already exists.
	 */
	constructor(readonly name: string) {
		super(httpStatus[400].statusCode, `El sitio ${name} ya existe`)
		this.name = this.constructor.name
	}
}
