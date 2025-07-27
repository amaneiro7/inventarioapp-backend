import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @class DeviceMonitoringDoesNotExistError
 * @extends ApiError
 * @description Error thrown when a device monitoring record is not found.
 */
export class DeviceMonitoringDoesNotExistError extends ApiError {
	/**
	 * @param {string} id The ID of the record that was not found.
	 */
	constructor(public readonly id: string) {
		super(httpStatus[404].statusCode, `El monitoreo para el dispositivo con ID '${id}' no existe.`)
	}
}
