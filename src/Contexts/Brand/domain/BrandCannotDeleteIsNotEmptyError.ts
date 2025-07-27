import { ApiError } from '../../Shared/domain/errors/ApiError'
import httpStatus from '../../Shared/infrastructure/utils/http-status'

/**
 * @class BrandCannotDeleteIsNotEmptyError
 * @extends ApiError
 * @description Error thrown when a brand cannot be deleted because it has associated entities
 * (e.g., models or devices), indicating a business rule violation.
 */
export class BrandCannotDeleteIsNotEmptyError extends ApiError {
	/**
	 * @constructor
	 */
	constructor() {
		super(
			httpStatus[400].statusCode,
			'No se puede eliminar la marca porque tiene modelos o dispositivos asociados.'
		)
	}
}
