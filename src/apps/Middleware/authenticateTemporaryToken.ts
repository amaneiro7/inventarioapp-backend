import { type NextFunction, type Request, type Response } from 'express'
import passport from 'passport'
import { StrategyOptions } from '../../Contexts/Auth/infrastructure/passport/strategy-options'
import { InvalidArgumentError } from '../../Contexts/Shared/domain/errors/ApiError'
import { type JwtPayloadUser } from '../../Contexts/Auth/domain/GenerateToken'

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
				return next(err)
			}
			if (!user) {
				// Handle token expiration or invalid token from passport's info
				const message =
					info?.message === 'jwt expired' ? 'El token temporal ha expirado.' : 'Token temporal inválido.'
				return next(new InvalidArgumentError(message))
			}

			// Check for the specific purpose
			if (user.purpose !== 'change-password') {
				return next(new InvalidArgumentError('Este token no es válido para cambiar la contraseña.'))
			}

			req.user = user
			next()
		}
	)(req, res, next)
}
