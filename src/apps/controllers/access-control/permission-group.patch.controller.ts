import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type PermissionGroupUpdater } from '../../../Contexts/AccessControl/PermissionGroup/application/PermissionGroupUpdater'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { PermissionGroupDependencies } from '../../di/access-control/permission-group'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for creating a new PermissionGroup.
 */
export class PermissionGroupPatchController implements Controller {
	/**
	 * Handles the request to create a new PermissionGroup.
	 * @param {Request} req - The Express request object, containing brand parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const { id } = req.params
			const create: PermissionGroupUpdater = container.resolve(PermissionGroupDependencies.Updater)
			await create.run({ id, params })
			res.status(httpStatus[200].statusCode).json({
				message: SUCCESS_MESSAGES.PERMISSION_GROUP_UPDATED
			})
		} catch (error) {
			next(error)
		}
	}
}
