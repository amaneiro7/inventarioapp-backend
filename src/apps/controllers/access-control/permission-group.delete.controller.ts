import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type PermissionGroupRemover } from '../../../Contexts/AccessControl/PermissionGroup/application/PermissionGroupRemover'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { PermissionGroupDependencies } from '../../di/access-control/permission-group'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for deleting an existing PermissionGroup.
 */
export class PermissionGroupDeleteController implements Controller {
	/**
	 * Handles the request to update a PermissionGroup.
	 * @param {Request} req - The Express request object, containing the brand ID in `req.params` and update parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params
			const update: PermissionGroupRemover = container.resolve(PermissionGroupDependencies.Remover)
			await update.run({ id })
			res.status(httpStatus[200].statusCode).json({
				message: SUCCESS_MESSAGES.PERMISSION_GROUP_REMOVED
			})
		} catch (error) {
			next(error)
		}
	}
}
