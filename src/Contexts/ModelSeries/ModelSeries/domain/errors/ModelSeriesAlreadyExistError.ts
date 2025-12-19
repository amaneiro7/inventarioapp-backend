import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when attempting to create a model series that already exists.
 */
export class ModelSeriesAlreadyExistError extends ApiError {
	constructor(readonly name: string) {
		super(httpStatus[400].statusCode, `El modelo '${name}' ya existe.`)
		this.name = this.constructor.name
	}
}
