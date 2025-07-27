import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when a CentroCosto is not found.
 */
export class CentroCostoDoesNotExistError extends ApiError {
	constructor() {
		super(httpStatus[404].statusCode, 'El centro de costo no existe.')
	}
}
