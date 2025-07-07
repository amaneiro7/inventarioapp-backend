import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class ModelSeriesCannotDeleteIsNotEmptyError extends ApiError {
	constructor() {
		super(httpStatus.BAD_REQUEST, 'Cannot delete this Model because is not empty')
	}
}
