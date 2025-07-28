import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type UserFinder } from '../../../Contexts/User/user/application/UserFinder'
import { type JwtPayloadUser } from '../../../Contexts/Auth/domain/GenerateToken'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { UserDependencies } from '../../di/user/user.di'

/**
 * Controller for retrieving a single User by their ID.
 */
export class UserGetController implements Controller {
	/**
	 * Handles the request to get a User by ID.
	 * @param {Request} req - The Express request object, containing the user ID in `req.params` and the authenticated user payload in `req.user`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const user = req.user as JwtPayloadUser
			const { id } = req.params
			const get: UserFinder = container.resolve(UserDependencies.Finder)
			const data = await get.run({ id, user })
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
