import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class DeviceAlreadyExistError extends ApiError {
	constructor(readonly name: string) {
		super(httpStatus.BAD_REQUEST, `El dispositivo con el serial: ${name} ya existe.`)
	}
}
