import { ApiError } from '../../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when an operating system is not found.
 */
export class OperatingSystemDoesNotExistError extends ApiError {
	constructor(public readonly value: number | string) {
		super(httpStatus[404].statusCode, `El sistema operativo '${value}' no existe.`)
	}
}
