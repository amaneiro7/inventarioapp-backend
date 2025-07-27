import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when a CentroTrabajo is not found.
 */
export class CentroTrabajoDoesNotExistError extends ApiError {
	constructor() {
		super(httpStatus[404].statusCode, 'El centro de trabajo no existe.')
	}
}
