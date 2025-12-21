import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @class InputTypeDoesNotExistError
 * @extends ApiError
 * @description Error thrown when an operation is attempted on an input type that is not found in the database.
 */
export class InputTypeDoesNotExistError extends ApiError {
	/**
	 * @param {string | number} identifier The ID of the input type that was not found.
	 */
	constructor(identifier?: string | number) {
		let message = 'El tipo de entrada no existe.'
		if (identifier) {
			const isPlural = typeof identifier === 'string' && identifier.includes(',')
			message = isPlural
				? `Los tipos de entrada con los IDs '${identifier}' no existen.`
				: `El tipo de entrada con el ID '${identifier}' no existe.`
		}
		super(httpStatus[404].statusCode, message)
		this.name = this.constructor.name
	}
}
