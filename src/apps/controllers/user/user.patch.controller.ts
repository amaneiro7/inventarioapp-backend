import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type UserUpdater } from '../../../Contexts/User/user/application/UserUpdater'
import { type UserParams } from '../../../Contexts/User/user/domain/entity/User.dto'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { UserDependencies } from '../../di/user/user.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for deleting a user.
 */
export class UserPatchController implements Controller {
	/**
	 * Handles the request to delete a user by their ID.
	 * @param {Request} req - The Express request object, containing the user ID in `req.params` and the authenticated user payload in `req.user`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id, payload: params } = req.body as {
				id: string
				payload: Partial<UserParams>
			}
			const update: UserUpdater = container.resolve(UserDependencies.Updater)
			await update.run({ id, params })
			res.status(httpStatus[200].statusCode).send({
				message: SUCCESS_MESSAGES.USER_UPDATED
			})
		} catch (error) {
			next(error)
		}
	}
}
