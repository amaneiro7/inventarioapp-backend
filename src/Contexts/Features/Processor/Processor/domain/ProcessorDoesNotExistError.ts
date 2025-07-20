import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

export class ProcessorDoesNotExistError extends ApiError {
	constructor(public readonly value: string) {
		super(httpStatus[404].statusCode, `The processor name ${value} does not exist`)
	}
}
