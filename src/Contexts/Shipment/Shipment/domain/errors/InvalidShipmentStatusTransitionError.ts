import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

export class InvalidShipmentStatusTransitionError extends ApiError {
	constructor(public readonly message: string) {
		super(httpStatus[400].statusCode, message)
	}
}
