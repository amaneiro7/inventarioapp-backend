import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

export class AccessPolicyDoesNotExistError extends ApiError {
	constructor(id: string) {
		super(httpStatus[404].statusCode, `Access Policy with id ${id} does not exist`)
		this.name = 'AccessPolicyDoesNotExistError'
	}
}
