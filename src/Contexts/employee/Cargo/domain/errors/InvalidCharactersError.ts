import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when a string value contains invalid characters according to a specific format.
 */
export class InvalidCharactersError extends ApiError {
	constructor(className: string, value: string, formatDescription: string) {
		super(
			httpStatus[400].statusCode,
			`El valor '${value}' para <${className}> no es válido. ` +
				`Solo se permiten los siguientes caracteres: ${formatDescription}`
		)
		this.name = this.constructor.name
	}
}
