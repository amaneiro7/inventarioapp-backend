import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @class CargoDoesNotExistError
 * @extends ApiError
 * @description Error thrown when an operation is attempted on a cargo that is not found in the database.
 */
export class CargoDoesNotExistError extends ApiError {
	/**
	 * @param {string} identifier The ID of the cargo that was not found.
	 */
	constructor(identifier?: string) {
		let message = 'El cargo no existe.'
		if (identifier) {
			const isPlural = identifier.includes(',')
			message = isPlural
				? `Los cargos con los IDs '${identifier}' no existen.`
				: `El cargo con el ID '${identifier}' no existe.`
		}
		super(httpStatus[404].statusCode, message)
		this.name = this.constructor.name
	}
}
