import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class ComputerDoesNotExistError extends ApiError {
	constructor(public readonly value: string) {
		super(httpStatus.NOT_FOUND, `The computer features ${value} does not exist`)
	}
}
