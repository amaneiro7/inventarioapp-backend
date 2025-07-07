import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class RoleDoesNotExistError extends ApiError {
	constructor() {
		super(httpStatus.NOT_FOUND, `The role does not exist`)
	}
}
