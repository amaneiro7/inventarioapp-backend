import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class ComputerrCannotDeleteIsNotEmptyError extends ApiError {
	constructor() {
		super(httpStatus.BAD_REQUEST, 'Cannot delete this Computerr because is not empty')
	}
}
