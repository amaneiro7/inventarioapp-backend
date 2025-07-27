import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when a processor is not found.
 */
export class ProcessorDoesNotExistError extends ApiError {
	constructor(public readonly value: string) {
		super(httpStatus[404].statusCode, `El procesador con el identificador '${value}' no existe.`)
	}
}
