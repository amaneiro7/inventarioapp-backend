// import { validateReqSchema } from '../index'
// import { loginSchema } from './auth.validator'
import { type Router, type Request, type Response, type NextFunction } from 'express'
import { container } from '../../di/container'
import { StrategyOptions } from '../../../Contexts/Auth/infrastructure/passport/strategy-options'
import { AuthDependencies } from '../../di/auth/auth.di'
import { authenticateRefreshToken } from '../../Middleware/authenticateRefreshToken'
import { InvalidCredentialsError } from '../../../Contexts/Auth/domain/error/InvalidCredentialsError'
import { type UserDto } from '../../../Contexts/User/user/domain/entity/User.dto'
import { type AuthLoginController } from '../../controllers/auth/auth.login.controller'
import { type AuthLogoutController } from '../../controllers/auth/auth.logout.controller'
import { type AuthRefreshTokenController } from '../../controllers/auth/auth.refreshtoken.controller'
import { AuthMePermissionsController } from '../../controllers/auth/auth.me.permissions.controller'
import { protectedRoute } from '../../Middleware/protectedRoute'
import passport from 'passport'

export const register = async (router: Router) => {
	const authLoginController: AuthLoginController = container.resolve(AuthDependencies.LoginController)
	const authLogoutController: AuthLogoutController = container.resolve(AuthDependencies.LogoutController)
	const authRefreshTokenController: AuthRefreshTokenController = container.resolve(
		AuthDependencies.RefreshTokenController
	)
	const authMePermissionsController: AuthMePermissionsController = container.resolve(
		AuthDependencies.AuthMePermissionsController
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

	/**
	 * @swagger
	 * /auth/refresh-token:
	 *   get:
	 *     tags: [Autenticación]
	 *     summary: Refrescar token de acceso
	 *     description: Genera un nuevo token de acceso utilizando un token de refresco válido, generalmente enviado a través de una cookie segura.
	 *     security:
	 *       - bearerAuth: [] # O especificar si se usa una cookie
	 *     responses:
	 *       '200':
	 *         description: Token de acceso refrescado con éxito.
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               properties:
	 *                 accessToken:
	 *                   type: string
	 *       '401':
	 *         description: No autorizado, token de refresco inválido o expirado.
	 */
	router.get(
		'/auth/refresh-token',
		authenticateRefreshToken,
		authRefreshTokenController.run.bind(authRefreshTokenController)
	)

	/**
	 * @swagger
	 * /auth/me/permissions:
	 *   get:
	 *     tags: [Autenticación]
	 *     summary: Obtener permisos del usuario actual
	 *     description: Devuelve una lista con los nombres de todos los permisos asignados al usuario autenticado.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de permisos obtenida con éxito.
	 *       '401':
	 *         description: No autorizado.
	 */
	router.get(
		'/auth/me/permissions',
		...protectedRoute,
		authMePermissionsController.run.bind(authMePermissionsController)
	)

	/**
	 * @swagger
	 * /auth/logout:
	 *   post:
	 *     tags: [Autenticación]
	 *     summary: Cerrar sesión de usuario
	 *     description: Invalida el token de refresco del usuario, cerrando la sesión de forma segura.
	 *     responses:
	 *       '200':
	 *         description: Sesión cerrada con éxito.
	 */
	router.post('/auth/logout', authLogoutController.run.bind(authLogoutController))
}
