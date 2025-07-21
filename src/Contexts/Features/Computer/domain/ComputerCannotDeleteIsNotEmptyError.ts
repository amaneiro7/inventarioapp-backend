import { ApiError } from '../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../Shared/infrastructure/utils/http-status'

/**
 * Error thrown when trying to delete a non-empty computer.
 */
export class ComputerCannotDeleteIsNotEmptyError extends ApiError {
	/**
	 * Creates an instance of ComputerCannotDeleteIsNotEmptyError.
	 */
	constructor() {
		super(httpStatus[400].statusCode, 'Cannot delete this computer because it is not empty')
	}
}

