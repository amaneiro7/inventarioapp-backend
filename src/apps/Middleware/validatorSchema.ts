import { type Request, type Response, type NextFunction } from 'express'
import { type ValidationError, validationResult } from 'express-validator'
import httpStatus from '../../Contexts/Shared/infrastructure/utils/http-status'
import { ApiError } from '../../Contexts/Shared/domain/errors/ApiError'

export function validateReqSchema(req: Request, res: Response, next: NextFunction): any {
	const validationErrors = validationResult(req)
	if (validationErrors.isEmpty()) {
		next()
		return
	}
	const errors = validationErrors.array().map((err: ValidationError) => ({
		[err.type]: err.msg
	}))

	throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY, JSON.stringify(errors))
}
