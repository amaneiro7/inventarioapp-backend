import { ApiError } from '../../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when an operating system architecture is not found.
 */
export class OperatingSystemArqDoesNotExistError extends ApiError {
	constructor(public readonly value: number | string) {
		super(httpStatus[404].statusCode, `La arquitectura de sistema operativo '${value}' no existe.`)
	}
}
