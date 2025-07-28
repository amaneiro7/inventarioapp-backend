import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type JwtPayloadUser } from '../../../Contexts/Auth/domain/GenerateToken'
import { type UserRegister } from '../../../Contexts/User/user/application/UserRegister'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { UserDependencies } from '../../di/user/user.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for registering a new user.
 */
export class UserPostController implements Controller {
	/**
	 * Handles the request to register a new user.
	 * @param {Request} req - The Express request object, containing the authenticated user payload in `req.user` and user parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const user = req.user as JwtPayloadUser
			const payload = req.body
			const create: UserRegister = container.resolve(UserDependencies.Register)
			await create.run({ payload, user })
			res.status(httpStatus[201].statusCode).send({
				message: SUCCESS_MESSAGES.USER_REGISTERED
			})
		} catch (error) {
			next(error)
		}
	}
}
