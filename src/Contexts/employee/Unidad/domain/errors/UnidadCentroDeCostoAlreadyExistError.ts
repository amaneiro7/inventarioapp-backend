import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when attempting to create a unit with a cost center that already exists.
 */
export class UnidadCentroDeCostoAlreadyExistError extends ApiError {
	constructor(value: string) {
		super(httpStatus[400].statusCode, `El centro de costo '${value}' ya se encuentra registrado para otra unidad.`)
	}
}
