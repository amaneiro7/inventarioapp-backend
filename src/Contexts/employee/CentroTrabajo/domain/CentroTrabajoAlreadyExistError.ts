import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when attempting to create a CentroTrabajo that already exists.
 */
export class CentroTrabajoAlreadyExistError extends ApiError {
	constructor() {
		super(httpStatus[400].statusCode, 'El centro de trabajo ya se encuentra registrado.')
	}
}
