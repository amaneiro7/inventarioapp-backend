import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type RegionUpdater } from '../../../Contexts/Location/Region/application/RegionUpdater'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { RegionDependencies } from '../../di/location/region.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for updating an existing Region.
 */
export class RegionPatchController implements Controller {
	/**
	 * Handles the request to update a Region.
	 * @param {Request} req - The Express request object, containing the region ID in `req.params` and update parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const id = String(req.params.id)
			const update: RegionUpdater = container.resolve(RegionDependencies.Updater)
			await update.run({ id, params })
			res.status(httpStatus[200].statusCode).send({
				message: SUCCESS_MESSAGES.REGION_UPDATED
			})
		} catch (error) {
			next(error)
		}
	}
}
