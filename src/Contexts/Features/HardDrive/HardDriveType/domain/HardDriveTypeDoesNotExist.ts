import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

export class HardDriveTypeDoesNotExistError extends ApiError {
	constructor(public readonly value: number | string) {
		super(httpStatus[404].statusCode, `This Hard Drive Type ${value} does not exist`)
	}
}
