import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class CentroTrabajoAlreadyExistError extends ApiError {
	constructor() {
		super(httpStatus.BAD_REQUEST, `El centro de trabajo ya se encuentra registrado`)
	}
}
