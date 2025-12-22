import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @class CategoryDoesNotExistError
 * @extends ApiError
 * @description Error thrown when an operation is attempted on a category that is not found in the database.
 */
export class CategoryDoesNotExistError extends ApiError {
	/**
	 * @param {string} identifier The ID of the category that was not found.
	 */
	constructor(identifier?: string) {
		let message = 'La categoría no existe.'
		if (identifier) {
			const isPlural = identifier.includes(',')
			message = isPlural
				? `Las categorías con los IDs '${identifier}' no existen.`
				: `La categoría con el ID '${identifier}' no existe.`
		}

		super(httpStatus[404].statusCode, message)
		this.name = this.constructor.name
	}
}
