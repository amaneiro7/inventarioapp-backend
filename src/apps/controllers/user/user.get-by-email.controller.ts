import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type JwtPayloadUser } from '../../../Contexts/Auth/domain/GenerateToken'
import { type UserFinderByEmail } from '../../../Contexts/User/user/application/UserFindByEmail'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { UserDependencies } from '../../di/user/user.di'

/**
 * Controller for retrieving a single User by their email address.
 */
export class UserGetByEmailController implements Controller {
	/**
	 * Handles the request to get a User by email.
	 * @param {Request} req - The Express request object, containing the user payload in `req.user` and email in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const user = req.user as JwtPayloadUser
			const { email } = req.body
			const get: UserFinderByEmail = container.resolve(UserDependencies.FinderByEmail)
			const data = await get.run({ email, user })
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
