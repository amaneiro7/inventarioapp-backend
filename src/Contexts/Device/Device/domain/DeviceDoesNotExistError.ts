import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class DeviceDoesNotExistError extends ApiError {
	constructor(public readonly value: string) {
		super(httpStatus.NOT_FOUND, `The Device ${value} does not exist`)
	}
}
