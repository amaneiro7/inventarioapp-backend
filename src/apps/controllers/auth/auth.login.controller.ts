import { type NextFunction, type Request, type Response } from 'express'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { Controller } from '../controller'
import { authenticaUser } from '../../../Contexts/Auth/application/AuthUseCase'
import { ApiError } from '../../../Contexts/Shared/domain/errors/ApiError'
import { type UserDto } from '../../../Contexts/User/user/domain/entity/User.dto'

type ReqUser = UserDto

/**
 * Controller for user login.
 */
export class AuthLoginController implements Controller {
	/**
	 * Handles the user login request.
	 * @param {Request} req - The Express request object.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const user = req.user as ReqUser
			if (!user) throw new ApiError(httpStatus[404].statusCode, 'User not found')

			const { user: infoUser, refreshToken, accessToken } = await authenticaUser(user)

			res.status(httpStatus[200].statusCode)
				.cookie('refreshToken', refreshToken, {
					httpOnly: true,
					secure: process.env.NODE_ENV === 'production',
					sameSite: 'strict'
				})
				.json({
					user: infoUser,
					accessToken,
					message: 'Sesion iniciada exitosamente'
				})
		} catch (error) {
			next(error)
		}
	}
}
