import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type PermissionRemover } from '../../../Contexts/AccessControl/Permission/application/PermissionRemover'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { PermissionDependencies } from '../../di/access-control/permission.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for deleting an existing Permission.
 */
export class PermissionDeleteController implements Controller {
	/**
	 * Handles the request to update a Permission.
	 * @param {Request} req - The Express request object, containing the brand ID in `req.params` and update parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params
			const update: PermissionRemover = container.resolve(PermissionDependencies.Remover)
			await update.run({ id })
			res.status(httpStatus[200].statusCode).json({
				message: SUCCESS_MESSAGES.PERMISSION_REMOVED
			})
		} catch (error) {
			next(error)
		}
	}
}
