import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class ComputerrCannotDeleteIsNotEmptyError extends ApiError {
	constructor() {
		super(httpStatus[400].statusCode, 'Cannot delete this Computerr because is not empty')
	}
}
