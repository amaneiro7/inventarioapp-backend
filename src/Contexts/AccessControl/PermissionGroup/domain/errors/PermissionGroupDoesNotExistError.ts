import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

export class PermissionGroupDoesNotExistError extends ApiError {
	constructor(id?: string) {
		super(
			httpStatus[404].statusCode,
			id ? `El grupo de permisos con id '${id}' no existe.` : 'El grupo de permisos no existe.'
		)
		this.name = 'PermissionGroupDoesNotExistError'
	}
}
