import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class DeviceDoesNotExistError extends ApiError {
	constructor(public readonly value: string) {
		super(httpStatus[404].statusCode, `The Device ${value} does not exist`)
	}
}
