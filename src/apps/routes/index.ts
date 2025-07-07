import { Router, type Express, type NextFunction, type Request, type Response } from 'express'
import { resolve } from 'node:path'
import { sync } from 'fast-glob'
import httpStatus from '../../Contexts/Shared/infrastructure/utils/http-status'
import { validationResult, type ValidationError } from 'express-validator'
import { errorHandler, errorConverter } from '../Middleware/errorHandler'
import { type Logger } from '../../Contexts/Shared/domain/Logger'

export function registerRoutes(express: Express, logger: Logger) {
	const router = Router()
	express.use('/api/v1', router)

	const routePath = 'src/**/*.route.*'
	const routes = sync(routePath)
	for (const route of routes) {
		register(route, router)
	}

	// convert error to ApiError, if needed
	router.use(errorConverter)

	// handle error
	router.use(errorHandler(logger))
}

function register(routePath: string, router: Router) {
	const route = require(resolve(routePath))
	route.register(router)
}

export function validateReqSchema(req: Request, res: Response, next: NextFunction) {
	const validationErrors = validationResult(req)
	if (validationErrors.isEmpty()) {
		return next()
	}
	const errors = validationErrors.array().map((err: ValidationError) => ({ [err.type]: err.msg }))

	return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
		errors
	})
}
