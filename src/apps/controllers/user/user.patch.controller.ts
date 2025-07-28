import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type JwtPayloadUser } from '../../../Contexts/Auth/domain/GenerateToken'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { UserUpdater } from '../../../Contexts/User/user/application/UserUpdater'
import { UserDependencies } from '../../di/user/user.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for updating an existing user.
 */
export class UserPatchController implements Controller {
	/**
	 * Handles the request to update a user.
	 * @param {Request} req - The Express request object, containing the authenticated user payload in `req.user`, update parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const user = req.user as JwtPayloadUser
			const { id, payload } = req.body

			const update: UserUpdater = container.resolve(UserDependencies.Updater)
			await update.run({ id, payload, user })
			res.status(httpStatus[200].statusCode).send({
				message: SUCCESS_MESSAGES.USER_UPDATED
			})
		} catch (error) {
			next(error)
		}
	}
}
