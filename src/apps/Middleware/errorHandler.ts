import { type Request, type Response, type NextFunction } from 'express'
import httpStatus from '../../Contexts/Shared/infrastructure/utils/http-status'
import { config } from '../../Contexts/Shared/infrastructure/config'
import { type Logger } from '../../Contexts/Shared/domain/Logger'

interface ApiError extends Error {
	statusCode: number
	isOperational: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (logger: Logger) => (err: ApiError, req: Request, res: Response, _next: NextFunction) => {
	let { statusCode, message } = err
	if (config.isProd && !err.isOperational) {
		statusCode = httpStatus.INTERNAL_SERVER_ERROR
		message = httpStatus[500]
	}

	res.locals.errorMessage = err.message

	// const response = {
	// 	code: statusCode,
	// 	message
	// }

	if (!config.isProd) {
		logger.error(err)
	}

	res.status(statusCode).send(message)
}
