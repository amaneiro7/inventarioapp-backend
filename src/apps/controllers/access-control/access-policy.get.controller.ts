import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type AccessPolicyFinder } from '../../../Contexts/AccessControl/AccessPolicy/application/AccessPolicyFInder'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { AccessPolicyDependencies } from '../../di/access-control/access-policy.di'

/**
 * Controller for retrieving a single AccessPolicyp by its ID.
 */
export class AccessPolicyGetController implements Controller {
	/**
	 * Handles the request to get a AccessPolicyp by ID.
	 * @param {Request} req - The Express request object, containing the brand ID in `req.params`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params
			const get: AccessPolicyFinder = container.resolve(AccessPolicyDependencies.Finder)
			const data = await get.run({ id })
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
