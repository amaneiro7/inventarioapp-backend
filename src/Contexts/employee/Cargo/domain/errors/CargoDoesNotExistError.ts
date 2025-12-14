import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when a Cargo is not found.
 */
export class CargoDoesNotExistError extends ApiError {
	constructor() {
		super(httpStatus[404].statusCode, 'El cargo no existe.')
		this.name = this.constructor.name
	}
}
