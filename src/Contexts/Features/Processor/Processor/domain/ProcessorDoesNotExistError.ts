import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

export class ProcessorDoesNotExistError extends ApiError {
	constructor(public readonly value: string) {
		super(httpStatus.NOT_FOUND, `The processor name ${value} does not exist`)
	}
}
