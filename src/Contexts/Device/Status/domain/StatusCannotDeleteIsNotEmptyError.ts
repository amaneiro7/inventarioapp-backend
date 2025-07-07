import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class StatusCannotDeleteIsNotEmptyError extends ApiError {
	constructor() {
		super(httpStatus.BAD_REQUEST, 'Cannot delete this brand because is not empty')
	}
}
