import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type CreateUserFromEmployee } from '../../../Contexts/User/user/application/CreateUserFromEmployee'
import { type JwtPayloadUser } from '../../../Contexts/Auth/domain/GenerateToken'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { UserDependencies } from '../../di/user/user.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for deleting a user.
 */
export class UserCreateController implements Controller {
	/**
	 * Handles the request to delete a user by their ID.
	 * @param {Request} req - The Express request object, containing the user ID in `req.params` and the authenticated user payload in `req.user`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const payload = req.body
			const user = req.user as JwtPayloadUser
			const create: CreateUserFromEmployee = container.resolve(UserDependencies.Register)
			const data = await create.run({ user, payload })
			res.status(httpStatus[200].statusCode).send({
				data,
				message: SUCCESS_MESSAGES.USER_REGISTERED
			})
		} catch (error) {
			next(error)
		}
	}
}
