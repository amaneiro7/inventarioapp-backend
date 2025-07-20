import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class UserAlreadyExistError extends ApiError {
	constructor(readonly email: string) {
		super(httpStatus[400].statusCode, `The user ${email} already exist`)
	}
}
