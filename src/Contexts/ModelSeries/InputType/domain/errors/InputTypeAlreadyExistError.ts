import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @class BrandAlreadyExistError
 * @extends ApiError
 * @description Error thrown when attempting to create an input type with a name that already exists.
 */
export class InputTypeAlreadyExistError extends ApiError {
	/**
	 * @param {string} name The name of the input type that already exists.
	 */
	constructor(readonly name: string) {
		super(httpStatus[400].statusCode, `El tipo de entrada '${name}' ya existe.`)
		this.name = this.constructor.name
	}
}
