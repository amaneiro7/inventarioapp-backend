import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type UserFinderAll } from '../../../Contexts/User/user/application/UserFinderAll'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { UserDependencies } from '../../di/user/user.di'

/**
 * Controller for retrieving all User entries.
 */
export class UserGetAllController implements Controller {
	/**
	 * Handles the request to get all User entries.
	 * @param {Request} req - The Express request object, containing criteria in `req.criteria`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: UserFinderAll = container.resolve(UserDependencies.FinderAll)
			const data = await getAll.run({ criteria: req.criteria! })
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
