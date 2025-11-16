import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when attempting to create an Permission with a name that already exists.
 */
export class PermissionAlreadyExistsError extends ApiError {
	constructor(readonly name: string) {
		super(httpStatus[400].statusCode, `El permiso '${name}' ya existe.`)
		this.name = 'PermissionAlreadyExistsError'
	}
}
