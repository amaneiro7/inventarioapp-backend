import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class UserDoesNotExistError extends ApiError {
	constructor(public readonly email: string) {
		super(httpStatus.NOT_FOUND, `The user ${email} does not exist`)
	}
}
