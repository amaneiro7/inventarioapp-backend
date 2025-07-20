import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class RoleDoesNotExistError extends ApiError {
	constructor() {
		super(httpStatus[404].statusCode, `The role does not exist`)
	}
}
