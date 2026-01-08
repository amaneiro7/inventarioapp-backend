import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when a computer with the specified features is not found.
 */
export class ComputerDoesNotExistError extends ApiError {
	/**
	 * @param {string} value The identifier of the computer features that were not found.
	 */
	constructor(public readonly value: string) {
		super(httpStatus[400].statusCode, `Las características de la computadora con el valor '${value}' no existen.`)
	}
}
