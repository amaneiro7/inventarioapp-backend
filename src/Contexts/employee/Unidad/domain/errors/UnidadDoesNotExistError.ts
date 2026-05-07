import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when a directive is not found.
 */
export class UnidadDoesNotExistError extends ApiError {
	constructor(readonly value: string) {
		super(httpStatus[404].statusCode, `La unidad '${value}' no se encuentra registrada.`)
		this.name = this.constructor.name
	}
}
