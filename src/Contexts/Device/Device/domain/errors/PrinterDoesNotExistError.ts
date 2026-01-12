import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when a multifunctional Printer is not found.
 */
export class PrinterDoesNotExistError extends ApiError {
	constructor(public readonly value: string | number) {
		super(httpStatus[404].statusCode, `La impresora con el identificador '${value}' no existe.`)
	}
}
