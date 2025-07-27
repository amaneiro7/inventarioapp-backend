import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when attempting to create a processor that already exists.
 */
export class ProcessorAlreadyExistError extends ApiError {
	constructor(readonly name: string) {
		super(httpStatus[400].statusCode, `El procesador '${name}' ya existe.`)
	}
}
