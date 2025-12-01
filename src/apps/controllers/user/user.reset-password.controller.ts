import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type UserResetPassword } from '../../../Contexts/User/user/application/UserResetPassword'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { UserDependencies } from '../../di/user/user.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for resetting a user's password.
 */
export class UserResetPasswordController implements Controller {
	/**
	 * Handles the request to reset a user's password.
	 * @param {Request} req - The Express request object, containing the authenticated user payload in `req.user` and the user ID in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.body
			const reset: UserResetPassword = container.resolve(UserDependencies.ResetPassword)
			await reset.run({
				id
			})
			res.status(httpStatus[201].statusCode).send({
				message: SUCCESS_MESSAGES.USER_PASSWORD_RESET
			})
		} catch (error) {
			next(error)
		}
	}
}
