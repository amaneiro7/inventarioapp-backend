import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class ComputerAlreadyExistError extends ApiError {
	constructor(readonly name: string) {
		super(httpStatus.BAD_REQUEST, `The Computer Features ${name} already exist`)
	}
}
