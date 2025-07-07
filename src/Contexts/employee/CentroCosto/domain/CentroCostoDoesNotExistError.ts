import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class CentroCostoDoesNotExistError extends ApiError {
	constructor() {
		super(httpStatus.NOT_FOUND, 'El centro de costo no existe')
	}
}
