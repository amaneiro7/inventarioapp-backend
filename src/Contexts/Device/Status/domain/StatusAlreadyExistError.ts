import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class StatusAlreadyExistError extends ApiError {
	constructor(readonly name: string) {
		super(httpStatus.BAD_REQUEST, `The status ${name} already exist`)
	}
}
