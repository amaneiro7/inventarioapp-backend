import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

/**
 * @class StatusCannotDeleteIsNotEmptyError
 * @extends ApiError
 * @description Error thrown when a status cannot be deleted because it has associated devices.
 */
export class StatusCannotDeleteIsNotEmptyError extends ApiError {
	constructor() {
		super(httpStatus[400].statusCode, 'No se puede eliminar el estatus porque tiene dispositivos asociados.')
	}
}
