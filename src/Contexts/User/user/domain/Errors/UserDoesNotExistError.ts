import { ApiError } from '../../../../Shared/domain/errors/ApiError'
import httpStatus from '../../../../Shared/infrastructure/utils/http-status'

/**
 * @description Error thrown when a user is not found.
 */
export class UserDoesNotExistError extends ApiError {
	constructor(public readonly id?: string) {
		// Mensaje para el USUARIO: Evita referencias técnicas (el ID)
		const userMessage = 'El usuario solicitado no fue encontrado. Verifique la información e intente de nuevo.'

		// // Mensaje para el LOG: Incluye el ID para debugging
		// const logMessage = `El usuario con ID '${id}' no existe.`

		// Pasamos el mensaje amigable al super, pero el log guardará el ID.
		super(httpStatus[404].statusCode, userMessage)
	}
}
