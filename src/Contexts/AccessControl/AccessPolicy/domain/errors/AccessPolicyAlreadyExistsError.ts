import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when attempting to create an AccessPolicy with a name that already exists.
 */
export class AccessPolicyAlreadyExistsError extends ApiError {
	constructor(readonly name: string) {
		super(httpStatus[400].statusCode, `El grupo de permisos '${name}' ya existe.`)
		this.name = this.constructor.name
	}
}
