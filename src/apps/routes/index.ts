import { type NextFunction, type Request, type Response, type Router } from "express";
import { validationResult, ValidationError } from "express-validator";
import glob from 'glob'
import httpStatus from '../../Contexts/Shared/infrastructure/utils/http-status'

export function registerRoutes(router: Router) {
    const routes = glob.sync(__dirname + '/**/*.soute.*')
    routes.map(route => register(route, router))
}

function register(routePath: string, router: Router) {
    const route = require(routePath)
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