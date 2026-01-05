import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'
/**
 * @description Error thrown when attempting to create a vicepresidencia ejecutiva that already exists.
 */
export class VicepresidenciaEjecutivaAlreadyExistError extends ApiError {
	constructor(value: string) {
		super(httpStatus[400].statusCode, `La vicepresidencia ejecutiva '${value}' ya se encuentra registrada.`)
	}
}
