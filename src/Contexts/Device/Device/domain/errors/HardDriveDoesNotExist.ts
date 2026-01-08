import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when a hard drive is not found.
 */
export class HardDriveDoesNotExistError extends ApiError {
	constructor(public readonly value: string | number) {
		super(httpStatus[404].statusCode, `El disco duro con el identificador '${value}' no existe.`)
	}
}
