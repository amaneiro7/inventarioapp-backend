import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

export class OperatingSystemDoesNotExistError extends ApiError {
	constructor(public readonly value: number | string) {
		super(httpStatus.NOT_FOUND, `This Operating System ${value} does not exist`)
	}
}
