import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @class DeviceAlreadyExistError
 * @extends ApiError
 * @description Error thrown when attempting to create a device with a serial number or asset number that already exists.
 */
export class DeviceAlreadyExistError extends ApiError {
	/**
	 * @param {'serial' | 'activo'} type The type of conflict.
	 */
	constructor(type: 'serial' | 'activo') {
		const message =
			type === 'serial'
				? 'El serial indicado ya existe para la marca y categoría seleccionada.'
				: 'El número de activo indicado ya existe.'
		super(httpStatus[400].statusCode, message)
	}
}
