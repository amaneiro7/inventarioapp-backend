import { type Router, type NextFunction, type Request, type Response } from 'express'
import { resolve } from 'node:path'
import { sync } from 'fast-glob'
import httpStatus from '../../Contexts/Shared/infrastructure/utils/http-status'
import { validationResult, type ValidationError } from 'express-validator'
import { config } from '../../Contexts/Shared/infrastructure/config'

export function registerRoutes({ router }: { router: Router }) {
	const isProduction = config.isProd
	const routePath = isProduction ? 'dist/src/**/*.route.js' : 'src/**/*.route.ts'
	const routes = sync(routePath)
	for (const route of routes) {
		register(route, router)
	}
}

function register(routePath: string, router: Router) {
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	const route = require(resolve(process.cwd(), routePath))
	route.register(router)
}

export function validateReqSchema(req: Request, res: Response, next: NextFunction): void {
	const validationErrors = validationResult(req)
	if (validationErrors.isEmpty()) {
		next()
		return
	}
	const errors = validationErrors.array().map((err: ValidationError) => ({ [err.type]: err.msg }))

	res.status(httpStatus[422].statusCode).json({
		errors
	})
}
