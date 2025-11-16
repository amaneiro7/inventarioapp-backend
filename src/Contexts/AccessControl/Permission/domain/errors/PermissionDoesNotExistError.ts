import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

export class PermissionDoesNotExistError extends ApiError {
	constructor() {
		super(httpStatus[404].statusCode, 'El permiso no existe')
		this.name = 'PermissionDoesNotExistError'
	}
}
