import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type JwtPayloadUser } from '../../../Contexts/Auth/domain/GenerateToken'
import { type UserForceChangePassword } from '../../../Contexts/User/user/application/UserForceChangePassword'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { UserDependencies } from '../../di/user/user.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * @description Controller to handle the forced password change process.
 * This controller is used when a user's password has expired and they are required
 * to set a new one using a temporary token.
 */
export class UserForceChangePasswordController implements Controller {
	/**
	 * @description Executes the password change logic.
	 * It retrieves the user payload from the temporary token (validated by middleware),
	 * gets the new password from the request body, and calls the corresponding use case.
	 * @param {Request} req - The Express request object.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const user = req.user as JwtPayloadUser
			const { newPassword, reTypePassword } = req.body
			const forceChange: UserForceChangePassword = container.resolve(UserDependencies.ForceChangePassword)
			await forceChange.run({ user, newPassword, reTypePassword })
			res.status(httpStatus[200].statusCode).send({ message: SUCCESS_MESSAGES.USER_PASSWORD_UPDATED })
		} catch (error) {
			next(error)
		}
	}
}
