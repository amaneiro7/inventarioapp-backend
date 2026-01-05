import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Generic error thrown when attempting to create or update an Employee with a unique field that already exists.
 */
export class EmployeeAlreadyExistError extends ApiError {
	constructor(message: string) {
		super(httpStatus[400].statusCode, message)
		this.name = this.constructor.name
	}
}
