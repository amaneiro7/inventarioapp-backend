import { ApiError } from '../../Shared/domain/errors/ApiError'
import httpStatus from '../../Shared/infrastructure/utils/http-status'

export class DepartmentDoesNotExistError extends ApiError {
	constructor(readonly value: string) {
		super(httpStatus[404].statusCode, `${value} no se encuentra registrado`)
	}
}
