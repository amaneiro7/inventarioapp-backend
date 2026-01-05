import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when a vicepresidencia is not found.
 */
export class VicepresidenciaDoesNotExistError extends ApiError {
	constructor(readonly value: string) {
		super(httpStatus[404].statusCode, `La vicepresidencia '${value}' no se encuentra registrada.`)
		this.name = this.constructor.name
	}
}
