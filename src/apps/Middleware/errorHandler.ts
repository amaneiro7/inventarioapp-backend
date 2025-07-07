import { type Request, type Response, type NextFunction } from 'express'
import httpStatus from '../../Contexts/Shared/infrastructure/utils/http-status'
import { type Logger } from '../../Contexts/Shared/domain/Logger'
import { config } from '../../Contexts/Shared/infrastructure/config'

interface ApiError extends Error {
	statusCode: number
	isOperational: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorConverter = (err: ApiError | Error, req: Request, res: Response, next: NextFunction) => {
	let error = err
	// if (!(error instanceof ApiError)) {
	//   const statusCode = error.statusCode ? httpStatus.BAD_REQUEST : httpStatus.INTERNAL_SERVER_ERROR
	//   const message = error.message || httpStatus[statusCode]
	//   error = new ApiError(statusCode, message, false, err.stack)
	// }
	next(error)
}

export const errorHandler = (logger: Logger) => (err: ApiError, req: Request, res: Response, next: NextFunction) => {
	let { statusCode, message } = err
	if (config.isProd && !err.isOperational) {
		statusCode = httpStatus.INTERNAL_SERVER_ERROR
		message = httpStatus[500]
	}

	res.locals.errorMessage = err.message

	// const response = {
	// 	code: statusCode,
	// 	message,
	// 	...(!config.isProd && { stack: err.stack })
	// }

	if (!config.isProd) {
		logger.error(err)
	}

	res.status(statusCode).send(message)
}
