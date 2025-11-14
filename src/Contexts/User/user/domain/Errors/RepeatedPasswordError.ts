import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Excepción personalizada para contraseñas repetidas.
 */
export class RepeatedPasswordError extends ApiError {
	constructor() {
		super(
			httpStatus[400].statusCode,
			'La nueva contraseña ya ha sido utilizada previamente. Por favor, seleccione una diferente.'
		)
		this.name = 'RepeatedPasswordError'
	}
}
