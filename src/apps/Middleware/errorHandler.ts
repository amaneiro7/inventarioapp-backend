import { type Request, type Response, type NextFunction } from 'express'
import httpStatus from '../../Contexts/Shared/infrastructure/utils/http-status'
import { config } from '../../Contexts/Shared/infrastructure/config'
import { ApiError } from '../../Contexts/Shared/domain/errors/ApiError'
import { type Logger } from '../../Contexts/Shared/domain/Logger'
import { TokenInvalidOrExpiredError } from '../../Contexts/Auth/domain/error/TokenInvalidOrExpiredError'

/**
 * @description Express error handling middleware.
 * This middleware catches all errors that occur in the request processing pipeline.
 * It distinguishes between operational `ApiError` instances and unexpected, generic errors.
 * In a production environment, it hides the details of unexpected errors from the client,
 * sending a generic 500 error message instead. In all cases, it logs the full error.
 * @param {Logger} logger - The logger instance for logging errors.
 * @returns an Express error handling middleware function.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (logger: Logger) => (err: Error, req: Request, res: Response, _next: NextFunction) => {
	// Lista de errores que no queremos registrar para no generar ruido.
	const ignoredErrors = [TokenInvalidOrExpiredError]
	if (ignoredErrors.some(errorType => err instanceof errorType)) {
		// No registramos el error, pero sí enviamos la respuesta al cliente.
	} else {
		// Para todos los demás errores, los registramos.
		logger.error(err)
	}

	let statusCode: number = httpStatus[500].statusCode
	let message: string = httpStatus[500].message
	let responseBody: Record<string, unknown> = {}

	if (err instanceof ApiError) {
		// Use the status code and message from the operational error
		statusCode = err.statusCode
		message = err.message

		// In a production environment, if the error is not operational, hide the details
		if (config.isProd && !err.isOperational) {
			statusCode = httpStatus[500].statusCode
			message = httpStatus[500].message
		} else {
			// Si el error es operacional, incluimos su payload si existe
			responseBody = { ...err.payload }
		}
	} else {
		// For unexpected, non-ApiError types, always treat as a server error
		statusCode = httpStatus[500].statusCode
		// In production, send a generic message. In development, send the actual error message for easier debugging.
		message = config.isProd ? httpStatus[500].message : err.message
	}

	// Store the error message in res.locals for potential logging by other middlewares
	res.locals.errorMessage = err.message

	// Send a standardized JSON error response
	res.status(statusCode).json({
		status: 'error',
		statusCode,
		message,
		...responseBody
	})
}
