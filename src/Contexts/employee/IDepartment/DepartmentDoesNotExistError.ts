import { ApiError } from '../../Shared/domain/errors/ApiError'
import httpStatus from '../../Shared/infrastructure/utils/http-status'

export class DepartmentDoesNotExistError extends ApiError {
	constructor(readonly value: string) {
		super(httpStatus.NOT_FOUND, `${value} no se encuentra registrado`)
	}
}
