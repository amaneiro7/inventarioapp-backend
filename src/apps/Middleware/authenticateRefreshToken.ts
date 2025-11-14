import { type NextFunction, type Request, type Response } from 'express'
import passport from 'passport'
import { StrategyOptions } from '../../Contexts/Auth/infrastructure/passport/strategy-options'
import { InvalidArgumentError } from '../../Contexts/Shared/domain/errors/ApiError'
import { TokenInvalidOrExpiredError } from '../../Contexts/Auth/domain/error/TokenInvalidOrExpiredError'
import { TokenPurposeMismatchError } from '../../Contexts/Auth/domain/error/TokenPurposeMismatchError'
import { JwtPayload } from 'jsonwebtoken'

/**
 * @description Middleware to authenticate requests using the JWT Bearer strategy.
 * It uses Passport to verify the JWT token from the Authorization header.
 * If authentication is successful, the user payload is attached to the request object.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The next middleware function.
 */
export const authenticateRefreshToken = (req: Request, res: Response, next: NextFunction): void => {
	passport.authenticate(
		StrategyOptions.JWTCOOKIE,
		{ session: false },
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(err: Error | null, user: JwtPayload | false, info: any) => {
			if (err) {
				return next(new InvalidArgumentError(err.message))
			}
			if (!user) {
				let message: string = 'Token de Accesso inválido.'

				if (info?.message === 'jwt expired') {
					message = 'El token de accesso ha expirado.'
				}

				return next(new TokenInvalidOrExpiredError(message))
			}

			if (user.purpose !== 'refresh') {
				const message = `Propósito de token incorrecto. Se esperaba 'refresh', se recibió '${user.purpose}'.`

				return next(new TokenPurposeMismatchError(message))
			}
			req.user = user
			next()
		}
	)(req, res, next)
}
