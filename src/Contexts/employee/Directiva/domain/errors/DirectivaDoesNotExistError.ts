import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when a directive is not found.
 */
export class DirectivaDoesNotExistError extends ApiError {
	constructor(readonly value: string) {
		super(httpStatus[404].statusCode, `La directiva '${value}' no se encuentra registrada.`)
		this.name = this.constructor.name
	}
}
