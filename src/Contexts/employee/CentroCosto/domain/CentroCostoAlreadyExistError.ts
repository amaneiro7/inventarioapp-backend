import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when attempting to create a CentroCosto that already exists.
 */
export class CentroCostoAlreadyExistError extends ApiError {
	constructor() {
		super(httpStatus[400].statusCode, 'El centro de costo ya se encuentra registrado.')
	}
}
