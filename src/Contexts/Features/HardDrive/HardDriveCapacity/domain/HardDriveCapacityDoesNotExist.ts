import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

export class HardDriveCapacityDoesNotExistError extends ApiError {
	constructor(public readonly value: number | string) {
		super(httpStatus.NOT_FOUND, `This Hard Drive Capacity ${value} does not exist`)
	}
}
