import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

export class HardDriveDoesNotExistError extends ApiError {
	constructor(public readonly value: string | number) {
		super(httpStatus[404].statusCode, `This Hard Drive ${value} does not exist`)
	}
}
