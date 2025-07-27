import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when a hard drive capacity is not found.
 */
export class HardDriveCapacityDoesNotExistError extends ApiError {
	constructor(public readonly value: number | string) {
		super(httpStatus[404].statusCode, `La capacidad de disco duro '${value}' no existe.`)
	}
}
