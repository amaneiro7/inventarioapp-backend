import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

export class InvalidPermissionConfigurationError extends ApiError {
	constructor() {
		super(httpStatus[500].statusCode, 'Internal server error. Invalid permission configuration.')
		this.name = 'InvalidPermissionConfigurationError'
	}
}
