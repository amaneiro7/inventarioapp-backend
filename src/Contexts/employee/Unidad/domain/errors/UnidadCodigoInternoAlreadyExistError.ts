import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when attempting to create a unit with an internal code that already exists.
 */
export class UnidadCodigoInternoAlreadyExistError extends ApiError {
	constructor(value: string) {
		super(httpStatus[400].statusCode, `El código interno '${value}' ya se encuentra registrado para otra unidad.`)
	}
}
