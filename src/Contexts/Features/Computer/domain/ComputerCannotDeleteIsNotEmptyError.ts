import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when a computer cannot be deleted because it has associated entities.
 */
export class ComputerCannotDeleteIsNotEmptyError extends ApiError {
	constructor() {
		super(httpStatus[400].statusCode, 'No se puede eliminar esta computadora porque tiene dispositivos asociados.')
	}
}
