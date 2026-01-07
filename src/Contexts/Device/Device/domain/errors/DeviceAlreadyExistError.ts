import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @class DeviceAlreadyExistError
 * @extends ApiError
 * @description Error thrown when attempting to create a device with a serial number or asset number that already exists.
 */
export class DeviceAlreadyExistError extends ApiError {
	/**
	 * @param {string} identifier The identifier (serial or asset number) that already exists.
	 */
	constructor(readonly identifier: string) {
		super(httpStatus[400].statusCode, `El dispositivo con el identificador '${identifier}' ya existe.`)
	}
}
