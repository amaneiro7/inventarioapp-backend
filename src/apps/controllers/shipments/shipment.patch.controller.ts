import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type ShipmentUpdater } from '../../../Contexts/Shipment/Shipment/application/ShipmentUpdater'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { SUCCESS_MESSAGES } from '../../constants/messages'
import { ShipmentDependencies } from '../../di/shipment/shipment.di'

/**
 * Controller for updating an existing Shipment.
 */
export class ShipmentPatchController implements Controller {
	/**
	 * Handles the request to update a Shipment.
	 * @param {Request} req - The Express request object, containing the brand ID in `req.params` and update parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const id = String(req.params.id)
			const update: ShipmentUpdater = container.resolve(ShipmentDependencies.Updater)
			await update.run({ id, params })
			res.status(httpStatus[200].statusCode).json({
				message: SUCCESS_MESSAGES.SHIPMENT_UPDATED
			})
		} catch (error) {
			next(error)
		}
	}
}
