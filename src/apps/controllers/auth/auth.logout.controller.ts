import { type NextFunction, type Request, type Response } from 'express'
import { config } from '../../../Contexts/Shared/infrastructure/config'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { type Controller } from '../controller'
import { type TokenDenylistService } from '../../../Contexts/Auth/domain/TokenDenylistService'

/**
 * Controller for user logout.
 */
export class AuthLogoutController implements Controller {
	private readonly tokenDenylistService: TokenDenylistService
	constructor({ tokenDenylistService }: { tokenDenylistService: TokenDenylistService }) {
		this.tokenDenylistService = tokenDenylistService
	}

	/**
	 * Handles the user logout request.
	 * It adds the access and refresh tokens to a denylist and clears them from cookies.
	 * @param {Request} req - The Express request object.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const accessToken = req.cookies.accessToken as string | undefined
			const refreshToken = req.cookies.refreshToken as string | undefined

			if (accessToken) {
				// Add to the denylist with the access token's expiration time
				await this.tokenDenylistService.addToDenylist(accessToken, config.accessTokenRedisExpiresIn)
			}
			if (refreshToken) {
				// Add to the denylist with the refresh token's expiration time
				await this.tokenDenylistService.addToDenylist(refreshToken, config.refreshTokenRedisExpiresIn)
			}

			res.status(httpStatus[200].statusCode)
				.clearCookie('refreshToken')
				.clearCookie('accessToken')
				.send({ message: 'Sesión cerrada exitosamente' })
		} catch (error) {
			next(error)
		}
	}
}
