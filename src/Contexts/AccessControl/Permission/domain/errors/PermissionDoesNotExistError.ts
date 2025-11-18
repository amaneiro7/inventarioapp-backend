import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

export class PermissionDoesNotExistError extends ApiError {
	constructor({ permissionName, permissionId }: { permissionName?: string; permissionId?: string } = {}) {
		let message = 'El permiso no existe.'

		if (permissionId) {
			message = `El permiso con ID '${permissionId}' no existe.`
		} else if (permissionName) {
			message = `El permiso con nombre '${permissionName}' no existe.`
		}

		super(httpStatus[404].statusCode, message)
		this.name = this.constructor.name
	}
}
