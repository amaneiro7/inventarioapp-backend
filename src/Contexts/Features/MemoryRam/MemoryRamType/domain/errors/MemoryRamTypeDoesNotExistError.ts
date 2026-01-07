import { ApiError } from '../../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../../Shared/infrastructure/utils/http-status'

/**
 * @class MemorryRamTypeDoesNotExistError
 * @extends ApiError
 * @description Error thrown when an operation is attempted on a memory RAM type that is not found in the database.
 */
export class MemoryRamTypeDoesNotExistError extends ApiError {
	/**
	 * @param {string} identifier The ID of the memory RAM type that was not found.
	 */
	constructor(identifier?: string | number) {
		let message = 'El tipo de memoria RAM no existe.'
		if (identifier) {
			const isPlural = identifier.toString().includes(',')
			message = isPlural
				? `Los tipos de memoria RAM con los IDs '${identifier}' no existen.`
				: `El tipo de memoria RAM con el ID '${identifier}' no existe.`
		}
		super(httpStatus[404].statusCode, message)
		this.name = this.constructor.name
	}
}
