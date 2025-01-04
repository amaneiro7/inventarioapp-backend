import { type NextFunction, type Request, type Response, type Router } from "express";
import { validationResult, type ValidationError } from "express-validator";
import { join } from 'node:path'
import { glob } from 'fast-glob'
import httpStatus from '../../Contexts/Shared/infrastructure/utils/http-status'

export async function registerRoutes(router: Router) {
    const routePath = join(process.cwd(), 'src/apps/routes/*.route.*')
    for await (const route of await glob(routePath)) {
        await register(route, router)
    }
    // const routes = globSync(routePath)
    // routes.forEach(async route => await register(route, router))
}

async function register(routePath: string, router: Router) {
    const route = await require(routePath)
    await route.register(router)
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