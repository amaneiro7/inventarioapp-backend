// import { validateReqSchema } from '../index'
// import { loginSchema } from './auth.validator'
import { type Router, type Request, type Response, type NextFunction } from 'express'
import passport from 'passport'
import { container } from '../../di/container'
import { StrategyOptions } from '../../../Contexts/Auth/infrastructure/passport/strategy-options'
import { AuthDependencies } from '../../di/auth/auth.di'
import { authenticateRefreshToken } from '../../Middleware/authenticateRefreshToken'
import { InvalidCredentialsError } from '../../../Contexts/Auth/domain/error/InvalidCredentialsError'
import { type UserDto } from '../../../Contexts/User/user/domain/entity/User.dto'
import { type AuthLoginController } from '../../controllers/auth/auth.login.controller'
import { type AuthLogoutController } from '../../controllers/auth/auth.logout.controller'
import { type AuthRefreshTokenController } from '../../controllers/auth/auth.refreshtoken.controller'

export const register = async (router: Router) => {
	const authLoginController: AuthLoginController = container.resolve(AuthDependencies.LoginController)
	const authLogoutController: AuthLogoutController = container.resolve(AuthDependencies.LogoutController)
	const authRefreshTokenController: AuthRefreshTokenController = container.resolve(
		AuthDependencies.RefreshTokenController
	)

	/**
	 * @swagger
	 * /auth/login/local:
	 *   post:
	 *     tags:
	 *       - Autenticación
	 *     summary: Iniciar sesión de usuario
	 *     description: Autentica a un usuario con su email y contraseña, devolviendo tokens de acceso y refresco.
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/UserLogin'
	 *     responses:
	 *       '200':
	 *         description: Autenticación exitosa.
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               properties:
	 *                 accessToken:
	 *                   type: string
	 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
	 *       '401':
	 *         description: No autorizado, credenciales incorrectas.
	 */
	router.post(
		'/auth/login/local',
		// loginSchema, // <-- Validación añadida
		// validateReqSchema, // <-- Middleware que comprueba el resultado
		(req: Request, res: Response, next: NextFunction) => {
			passport.authenticate(StrategyOptions.LOCAL, { session: false }, (err: Error, user: UserDto | false) => {
				if (err) {
					return next(err)
				}
				if (!user) {
					// You can create a more specific error here if you want
					return next(new InvalidCredentialsError())
				}
				req.user = user
				next()
			})(req, res, next)
		},
		authLoginController.run.bind(authLoginController)
	)

	router.get(
		'/auth/refresh-token',
		authenticateRefreshToken,
		authRefreshTokenController.run.bind(authRefreshTokenController)
	)

	router.post('/auth/logout', authLogoutController.run.bind(authLogoutController))
}
