import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class CargoDoesNotExistError extends ApiError {
	constructor() {
		super(httpStatus.NOT_FOUND, `El cargo no existe`)
	}
}
