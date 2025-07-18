import { type NextFunction, type Request, type Response } from 'express'
import { config } from '../../../Contexts/Shared/infrastructure/config'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { type Controller } from '../controller'
import { type TokenDenylistService } from '../../../Contexts/Auth/domain/TokenDenylistService'

export class AuthLogoutController implements Controller {
	constructor(private readonly tokenDenylistService: TokenDenylistService) {}

	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const accessToken = req.cookies.accessToken as string | undefined
			const refreshToken = req.cookies.refreshToken as string | undefined

			if (accessToken) {
				// Añadir a la denylist con el tiempo de expiración del token de acceso
				await this.tokenDenylistService.addToDenylist(accessToken, config.accessTokenRedisExpiresIn)
			}
			if (refreshToken) {
				// Añadir a la denylist con el tiempo de expiración del token de refresco
				await this.tokenDenylistService.addToDenylist(refreshToken, config.refreshTokenRedisExpiresIn)
			}

			res.status(httpStatus.OK)
				.clearCookie('refreshToken')
				.clearCookie('accessToken')
				.send({ message: 'Sesión cerrada exitosamente' })
		} catch (error) {
			next(error)
		}
	}
}
