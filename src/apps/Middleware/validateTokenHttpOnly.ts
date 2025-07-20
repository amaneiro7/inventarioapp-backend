import { type NextFunction, type Request, type Response } from 'express'
import passport from 'passport'
import { StrategyOptions } from '../../Contexts/Auth/infrastructure/passport/strategy-options'

/**
 * @description Middleware to validate the refresh token from an HTTP-only cookie.
 * It uses the `jwt-cookie` Passport strategy to verify the token.
 * This is a crucial part of the token refresh flow.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The next middleware function.
 */
export const validateToken = (req: Request, res: Response, next: NextFunction): void => {
	passport.authenticate(StrategyOptions.JWTCOOKIE, { session: false })(req, res, next)
}
