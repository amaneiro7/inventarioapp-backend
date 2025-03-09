import { Router, type Express, type NextFunction, type Request, type Response } from 'express'
import { type Logger } from '../../Contexts/Shared/domain/Logger'
import httpStatus from '../../Contexts/Shared/infrastructure/utils/http-status'
import errorHandler from 'errorhandler'
import { validationResult, type ValidationError } from 'express-validator'
import { resolve } from 'node:path'
import { sync } from 'fast-glob'
import { config } from '../../Contexts/Shared/infrastructure/config'

export function registerRoutes(express: Express, logger: Logger) {
	const router = Router()
	express.use('/api/v1', router)
	if (!config.isProd) {
		router.use(errorHandler())
	}

	const routePath = 'src/**/*.route.*'
	const routes = sync(routePath)
	for (const route of routes) {
		register(route, router)
	}

	// Manejo de errores global
	router.use((err: Error, req: Request, res: Response, _next: () => void) => {
		const errorMessage = `name: ${err.name} - message: ${err.message}`
		logger.error(errorMessage)
		res.status(httpStatus.BAD_REQUEST).send(err.message)
	})
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
