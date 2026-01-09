import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when a multifunctional Printer is not found.
 */
export class MFPDoesNotExistError extends ApiError {
	constructor(public readonly value: string | number) {
		super(httpStatus[404].statusCode, `La impresora multifunctional con el identificador '${value}' no existe.`)
	}
}
