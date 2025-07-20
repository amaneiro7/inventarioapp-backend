import { type NextFunction, type Request, type Response } from 'express'
import passport from 'passport'
import { StrategyOptions } from '../../Contexts/Auth/infrastructure/passport/strategy-options'

/**
 * @description Middleware to authenticate requests using the JWT Bearer strategy.
 * It uses Passport to verify the JWT token from the Authorization header.
 * If authentication is successful, the user payload is attached to the request object.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The next middleware function.
 */
export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
	passport.authenticate(StrategyOptions.JWTBEARER, { session: false })(req, res, next)
}
