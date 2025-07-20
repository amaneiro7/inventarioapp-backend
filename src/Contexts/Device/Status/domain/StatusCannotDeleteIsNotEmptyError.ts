import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class StatusCannotDeleteIsNotEmptyError extends ApiError {
	constructor() {
		super(httpStatus[400].statusCode, 'Cannot delete this brand because is not empty')
	}
}
