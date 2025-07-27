import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when attempting to create a computer with features that already exist.
 */
export class ComputerAlreadyExistError extends ApiError {
	/**
	 * @param {string} name The name of the feature that already exists.
	 */
	constructor(readonly name: string) {
		super(httpStatus[400].statusCode, `Las características de la computadora con el nombre '${name}' ya existen.`)
	}
}
