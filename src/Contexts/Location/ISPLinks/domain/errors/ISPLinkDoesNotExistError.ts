import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * Custom error class for when a ISPLink does not exist.
 * Extends ApiError to provide a standardized error response.
 */
export class ISPLinkDoesNotExistError extends ApiError {
	/**
	 * @param {string} identifier The ID of the ISPLink that was not found.
	 */
	constructor(identifier?: string) {
		let message = 'El enlace ISP no existe.'
		if (identifier) {
			const isPlural = identifier.includes(',')
			message = isPlural
				? `Los enlaces ISP con los IDs '${identifier}' no existen.`
				: `El enlace ISP con el ID '${identifier}' no existe.`
		}
		super(httpStatus[404].statusCode, message)
		this.name = this.constructor.name
	}
}
