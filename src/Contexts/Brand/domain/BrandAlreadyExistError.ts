import { ApiError } from '../../Shared/domain/errors/ApiError'
import httpStatus from '../../Shared/infrastructure/utils/http-status'

/**
 * @class BrandAlreadyExistError
 * @extends ApiError
 * @description Error thrown when attempting to create a brand with a name that already exists.
 */
export class BrandAlreadyExistError extends ApiError {
	/**
	 * @param {string} name The name of the brand that already exists.
	 */
	constructor(readonly name: string) {
		super(httpStatus[400].statusCode, `La marca '${name}' ya existe.`)
	}
}
