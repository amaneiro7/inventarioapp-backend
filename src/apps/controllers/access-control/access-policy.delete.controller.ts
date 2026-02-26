import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type AccessPolicyRemover } from '../../../Contexts/AccessControl/AccessPolicy/application/AccessPolicyRemover'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { AccessPolicyDependencies } from '../../di/access-control/access-policy.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for deleting an existing AccessPolicy.
 */
export class AccessPolicyDeleteController implements Controller {
	/**
	 * Handles the request to update a AccessPolicy.
	 * @param {Request} req - The Express request object, containing the brand ID in `req.params` and update parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const id = String(req.params.id)
			const update: AccessPolicyRemover = container.resolve(AccessPolicyDependencies.Remover)
			await update.run({ id })
			res.status(httpStatus[200].statusCode).json({
				message: SUCCESS_MESSAGES.ACCESS_POLICY_REMOVED
			})
		} catch (error) {
			next(error)
		}
	}
}
