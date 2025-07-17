import { type NextFunction, type Request, type Response } from 'express'
import { type Controller } from '../controller'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { type TokenDenylistService } from '../../../Contexts/Auth/domain/TokenDenylistService'
import { config } from '../../../Contexts/Shared/infrastructure/config'

export class AuthLogoutController implements Controller {
	constructor(private readonly tokenDenylistService: TokenDenylistService) {}

	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const accessToken = req.cookies.accessToken as string | undefined
			const refreshToken = req.cookies.refreshToken as string | undefined

			if (accessToken) {
				// Añadir a la denylist con el tiempo de expiración del token de acceso
				await this.tokenDenylistService.addToDenylist(accessToken, config.accessTokenExpiresIn)
			}
			if (refreshToken) {
				// Añadir a la denylist con el tiempo de expiración del token de refresco
				await this.tokenDenylistService.addToDenylist(refreshToken, config.refreshTokenExpiresIn)
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
