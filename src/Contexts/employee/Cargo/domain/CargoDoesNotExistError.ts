import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class CargoDoesNotExistError extends ApiError {
	constructor() {
		super(httpStatus[404].statusCode, `El cargo no existe`)
	}
}
