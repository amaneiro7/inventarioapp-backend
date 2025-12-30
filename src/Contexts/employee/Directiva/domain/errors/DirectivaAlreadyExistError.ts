import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'
/**
 * @description Error thrown when attempting to create a directive that already exists.
 */
export class DirectivaAlreadyExistError extends ApiError {
	constructor(value: string) {
		super(httpStatus[400].statusCode, `La directiva '${value}' ya se encuentra registrada.`)
	}
}
