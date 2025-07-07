import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

export class ProcessorCannotDeleteIsNotEmptyError extends ApiError {
	constructor() {
		super(httpStatus.BAD_REQUEST, 'Cannot delete this processor because is not empty')
	}
}
