import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * Custom error class for when a ISPLink with the given name already exists.
 * Extends ApiError to provide a standardized error response.
 */
export class ISPLinkAlreadyExistError extends ApiError {
	/**
	 * Creates an instance of ISPLinkAlreadyExistError.
	 * @param {string} name - The name of the isp link that already exists.
	 */
	constructor(readonly name: string) {
		super(httpStatus[400].statusCode, `El enlace ISP ${name} ya existe`)
		this.name = this.constructor.name
	}
}
