import { loginLimiter } from '../../Middleware/loginRateLimit'
import passport from 'passport'
import { type Router } from 'express'
import { type AuthLoginController } from '../../controllers/auth/auth.login.controller'
import { type AuthLogoutController } from '../../controllers/auth/auth.logout.controller'
import { type AuthRefreshTokenController } from '../../controllers/auth/auth.refreshtoken.controller'
import { container } from '../../di/container'
import { StrategyOptions } from '../../../Contexts/Auth/infrastructure/passport/strategy-options'
import { AuthDependencies } from '../../di/auth/auth.di'

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
	 *             type: object
	 *             properties:
	 *               email:
	 *                 type: string
	 *                 description: Correo electrónico del usuario.
	 *                 example: "test@example.com"
	 *               password:
	 *                 type: string
	 *                 description: Contraseña del usuario.
	 *                 example: "password123"
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
		loginLimiter, // <--- Rate limit aplicado
		passport.authenticate(StrategyOptions.LOCAL, { session: false }),
		authLoginController.run.bind(authLoginController)
	)

	router.get(
		'/auth/refresh-token',
		passport.authenticate(StrategyOptions.JWTCOOKIE, { session: false }),
		authRefreshTokenController.run.bind(authRefreshTokenController)
	)

	router.post('/auth/logout', authLogoutController.run.bind(authLogoutController))
}
