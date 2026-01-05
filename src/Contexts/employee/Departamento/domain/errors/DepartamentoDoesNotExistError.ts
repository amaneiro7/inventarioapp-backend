import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when a departamento is not found.
 */
export class DepartamentoDoesNotExistError extends ApiError {
	constructor(readonly value: string) {
		super(httpStatus[404].statusCode, `El departamento '${value}' no se encuentra registrada.`)
		this.name = this.constructor.name
	}
}
