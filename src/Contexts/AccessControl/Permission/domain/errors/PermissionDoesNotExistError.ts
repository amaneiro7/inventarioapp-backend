import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

export class PermissionDoesNotExistError extends ApiError {
	constructor(permissionName: string) {
		super(
			httpStatus[404].statusCode,
			`El permiso requerido '${permissionName}' no existe en la definición del sistema. Verifique la configuración de permisos.`
		)
		this.name = this.constructor.name
	}
}
