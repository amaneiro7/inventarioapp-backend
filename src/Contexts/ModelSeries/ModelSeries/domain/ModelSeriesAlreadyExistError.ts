import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class ModelSeriesAlreadyExistError extends ApiError {
	constructor(readonly name: string) {
		super(httpStatus[400].statusCode, `The Model ${name} already exist`)
	}
}
