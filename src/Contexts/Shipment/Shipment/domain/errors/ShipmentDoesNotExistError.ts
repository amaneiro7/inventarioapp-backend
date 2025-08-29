import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

export class ShipmentDoesNotExistError extends ApiError {
	constructor(public readonly id: string) {
		super(httpStatus[404].statusCode, `El envío con el ID '${id}' no existe.`)
	}
}
