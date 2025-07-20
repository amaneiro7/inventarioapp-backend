import httpStatus from '../../../Shared/infrastructure/utils/http-status'

export class ApiError extends Error {
	statusCode: number
	isOperational: boolean
	constructor(statusCode: number, message: string, isOperational = true, stack = '') {
		super(message)
		this.statusCode = statusCode
		this.isOperational = isOperational
		if (stack) {
			this.stack = stack
		} else {
			Error.captureStackTrace(this, this.constructor)
		}
	}
}

export class InvalidArgumentError extends ApiError {
	constructor(message: string, stack = '') {
		super(httpStatus[400].statusCode, message, true, stack)
	}
}
