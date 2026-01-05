import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'
/**
 * @description Error thrown when attempting to create a vicepresidencia that already exists.
 */
export class VicepresidenciaAlreadyExistError extends ApiError {
	constructor(value: string) {
		super(httpStatus[400].statusCode, `La vicepresidencia '${value}' ya se encuentra registrada.`)
	}
}
