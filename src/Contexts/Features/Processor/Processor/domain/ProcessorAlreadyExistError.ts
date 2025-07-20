import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

export class ProcessorAlreadyExistError extends ApiError {
	constructor(readonly name: string) {
		super(httpStatus[400].statusCode, `The Processor ${name} already exist`)
	}
}
