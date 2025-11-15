import httpStatus from '../../../Shared/infrastructure/utils/http-status'
export class ApiError extends Error {
	public readonly statusCode: number
	public readonly isOperational: boolean
	public readonly payload?: Record<string, unknown>

	constructor(statusCode: number, message: string, isOperational = true, payload?: Record<string, unknown>) {
		super(message)
		this.name = this.constructor.name
		this.statusCode = statusCode
		this.isOperational = isOperational
		this.payload = payload

		// This captures the stack trace, excluding the constructor call from it.
		Error.captureStackTrace(this, this.constructor)
	}
}

export class InvalidArgumentError extends ApiError {
	constructor(message: string) {
		super(httpStatus[400].statusCode, message, true)
	}
}
