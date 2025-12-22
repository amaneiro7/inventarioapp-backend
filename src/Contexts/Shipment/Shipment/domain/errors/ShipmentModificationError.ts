import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

export class ShipmentModificationError extends ApiError {
	constructor(public readonly message: string) {
		super(httpStatus[400].statusCode, message)
		this.name = this.constructor.name
	}
}
