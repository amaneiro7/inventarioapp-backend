import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when attempting to create an PermissionGroup with a name that already exists.
 */
export class PermissionGroupAlreadyExistsError extends ApiError {
	constructor(readonly name: string) {
		super(httpStatus[400].statusCode, `El grupo de permisos '${name}' ya existe.`)
		this.name = 'PermissionGroupAlreadyExistsError'
	}
}
