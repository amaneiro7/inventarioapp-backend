import { type Request, type Response, type NextFunction } from 'express'
import { type ValidationError, validationResult } from 'express-validator'
import { httpStatus } from '../../Contexts/Shared/infrastructure/utils/http-status'
import { ApiError } from '../../Contexts/Shared/domain/errors/ApiError'

/**
 * @description Middleware to validate the request body against a predefined schema using `express-validator`.
 * If validation fails, it throws an `ApiError` with a `422 Unprocessable Entity` status code.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The next middleware function.
 */
export function validateReqSchema(req: Request, res: Response, next: NextFunction): void {
	const validationErrors = validationResult(req)
	if (validationErrors.isEmpty()) {
		return next()
	}

	const errors = validationErrors.array().map((err: ValidationError) => ({
		[err.type]: err.msg
	}))

	throw new ApiError(httpStatus[422].statusCode, JSON.stringify(errors))
}
