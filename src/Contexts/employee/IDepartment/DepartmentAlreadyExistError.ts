import { ApiError } from '../../Shared/domain/errors/ApiError'
import httpStatus from '../../Shared/infrastructure/utils/http-status'

export class DepartmentAlreadyExistError extends ApiError {
	constructor(value: string) {
		super(httpStatus[400].statusCode, `${value} ya se encuentra registrado`)
	}
}
