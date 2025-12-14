import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when attempting to create a Cargo with a name that already exists.
 */
export class CargoAlreadyExistError extends ApiError {
	constructor(readonly name: string) {
		super(httpStatus[400].statusCode, `El cargo '${name}' ya se encuentra registrado.`)
		this.name = this.constructor.name
	}
}
