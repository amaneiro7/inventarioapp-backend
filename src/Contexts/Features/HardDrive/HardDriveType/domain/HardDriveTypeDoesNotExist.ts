import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when a hard drive type is not found.
 */
export class HardDriveTypeDoesNotExistError extends ApiError {
	constructor(public readonly value: number | string) {
		super(httpStatus[404].statusCode, `El tipo de disco duro '${value}' no existe.`)
	}
}
