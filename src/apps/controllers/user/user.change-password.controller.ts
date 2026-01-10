import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type JwtPayloadUser } from '../../../Contexts/Auth/domain/service/GenerateToken'
import { type UserChangePassword } from '../../../Contexts/User/user/application/UserChangePassword'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { UserDependencies } from '../../di/user/user.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for changing a user's password.
 */
export class UserChangePasswordController implements Controller {
	/**
	 * Handles the request to change a user's password.
	 * @param {Request} req - The Express request object, containing the user payload in `req.user` and password details in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const user = req.user as JwtPayloadUser
			const { password, newPassword, reTypePassword } = req.body
			const changePassword: UserChangePassword = container.resolve(UserDependencies.ChangePassword)
			await changePassword.run({
				payload: user,
				password,
				newPassword,
				reTypePassword
			})
			res.status(httpStatus[201].statusCode).send({
				message: SUCCESS_MESSAGES.USER_PASSWORD_UPDATED
			})
		} catch (error) {
			next(error)
		}
	}
}
