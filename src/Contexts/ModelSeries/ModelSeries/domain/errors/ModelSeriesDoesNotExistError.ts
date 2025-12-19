import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when a model series is not found.
 */
export class ModelSeriesDoesNotExistError extends ApiError {
	constructor(public readonly value: string) {
		super(httpStatus[401].statusCode, `El modelo '${value}' no existe.`)
		this.name = this.constructor.name
	}
}
