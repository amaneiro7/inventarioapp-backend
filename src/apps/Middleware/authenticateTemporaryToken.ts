import { type NextFunction, type Request, type Response } from 'express'
import passport from 'passport'
import { StrategyOptions } from '../../Contexts/Auth/infrastructure/passport/strategy-options'
import { type JwtPayloadUser } from '../../Contexts/Auth/domain/GenerateToken'
import { TokenInvalidOrExpiredError } from '../../Contexts/Auth/domain/error/TokenInvalidOrExpiredError'
import { TokenPurposeMismatchError } from '../../Contexts/Auth/domain/error/TokenPurposeMismatchError'
import { InvalidArgumentError } from '../../Contexts/Shared/domain/errors/ApiError'

/**
 * @description Middleware to authenticate requests using a temporary JWT Bearer token.
 * It verifies the token and ensures it has the specific purpose of 'change-password'.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The next middleware function.
 */
export const authenticateTemporaryToken = (req: Request, res: Response, next: NextFunction): void => {
	passport.authenticate(
		StrategyOptions.JWTBEARER,
		{ session: false },
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(err: Error | null, user: JwtPayloadUser | false, info: any) => {
			if (err) {
				throw new InvalidArgumentError(err.message)
			}
			if (!user) {
				let message: string = 'Token temporal inválido.'

				if (info?.message === 'jwt expired') {
					message = 'El token temporal ha expirado.'
				}

				throw new TokenInvalidOrExpiredError(message)
			}

			if (user.purpose !== 'change-password') {
				const message = `Propósito de token incorrecto. Se esperaba 'change-password', se recibió '${user.purpose}'.`

				throw new TokenPurposeMismatchError(message)
			}

			req.user = user
			next()
		}
	)(req, res, next)
}
