import { Router, type Express, type NextFunction, type Request, type Response } from 'express'
import { resolve } from 'node:path'
import { sync } from 'fast-glob'
import httpStatus from '../../Contexts/Shared/infrastructure/utils/http-status'
import { validationResult, type ValidationError } from 'express-validator'

export function registerRoutes({ express }: { express: Express }) {
	const router = Router()
	express.use('/api/v1', router)

	const routePath = 'src/**/*.route.*'
	const routes = sync(routePath)
	for (const route of routes) {
		register(route, router)
	}
}

async function register(routePath: string, router: Router) {
	const route = await import(resolve(routePath))
	route.register(router)
}

export function validateReqSchema(req: Request, res: Response, next: NextFunction) {
	const validationErrors = validationResult(req)
	if (validationErrors.isEmpty()) {
		return next()
	}
	const errors = validationErrors.array().map((err: ValidationError) => ({ [err.type]: err.msg }))

	return res.status(httpStatus[422].statusCode).json({
		errors
	})
}
