import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @class ProcessorDoesNotExistError
 * @extends ApiError
 * @description Error thrown when an operation is attempted on a processor that is not found in the database.
 */
export class ProcessorDoesNotExistError extends ApiError {
	/**
	 * @param {string} identifier The ID of the processor that was not found.
	 */
	constructor(identifier?: string) {
		let message = 'El procesador no existe.'
		if (identifier) {
			const isPlural = identifier.includes(',')
			message = isPlural
				? `Los procesadores con los IDs '${identifier}' no existen.`
				: `El procesador con el ID '${identifier}' no existe.`
		}
		super(httpStatus[404].statusCode, message)
		this.name = this.constructor.name
	}
}
