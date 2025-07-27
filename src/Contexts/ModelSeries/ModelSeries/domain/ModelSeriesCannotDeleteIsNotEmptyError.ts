import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when a model series cannot be deleted because it has associated devices.
 */
export class ModelSeriesCannotDeleteIsNotEmptyError extends ApiError {
	constructor() {
		super(httpStatus[400].statusCode, 'No se puede eliminar este modelo porque tiene dispositivos asociados.')
	}
}
