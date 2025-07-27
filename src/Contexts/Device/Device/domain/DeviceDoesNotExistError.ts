import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

/**
 * @class DeviceDoesNotExistError
 * @extends ApiError
 * @description Error thrown when an operation is attempted on a device that is not found in the database.
 */
export class DeviceDoesNotExistError extends ApiError {
	/**
	 * @param {string} id The ID of the device that was not found.
	 */
	constructor(public readonly id: string) {
		super(httpStatus[404].statusCode, `El dispositivo con el ID '${id}' no existe.`)
	}
}
