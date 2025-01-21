import {
	type NextFunction,
	type Request,
	type Response,
	type Router
} from 'express'
import { validationResult, type ValidationError } from 'express-validator'
import { resolve } from 'node:path'
import { sync } from 'fast-glob'
import httpStatus from '../../Contexts/Shared/infrastructure/utils/http-status'

export function registerRoutes(router: Router) {
	const routePath = 'src/**/*.route.*'
	const routes = sync(routePath)
	for (const route of routes) {
		register(route, router)
	}
}

function register(routePath: string, router: Router) {
	const route = require(resolve(routePath))
	route.register(router)
}

export function validateReqSchema(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const validationErrors = validationResult(req)
	if (validationErrors.isEmpty()) {
		return next()
	}
	const errors = validationErrors
		.array()
		.map((err: ValidationError) => ({ [err.type]: err.msg }))

	return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
		errors
	})
}
