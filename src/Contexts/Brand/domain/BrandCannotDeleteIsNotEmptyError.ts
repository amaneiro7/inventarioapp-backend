import { ApiError } from '../../Shared/domain/errors/ApiError'
import httpStatus from '../../Shared/infrastructure/utils/http-status'

/**
 * @class BrandCannotDeleteIsNotEmptyError
 * @extends ApiError
 * @description Custom error class for when a brand cannot be deleted because it is not empty (e.g., has associated models or devices).
 * This error indicates a business rule violation preventing deletion.
 */
export class BrandCannotDeleteIsNotEmptyError extends ApiError {
	/**
	 * @constructor
	 * @description Creates an instance of BrandCannotDeleteIsNotEmptyError.
	 */
	constructor() {
		super(httpStatus.BAD_REQUEST, 'Cannot delete this brand because is not empty')
	}
}
