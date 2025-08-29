import { type Request, type Response, type NextFunction } from 'express'
import { type ShipmentFinder } from '../../../Contexts/Shipment/Shipment/application/ShipmentFinder'
import { type Controller } from '../controller'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { ShipmentDependencies } from '../../di/shipment/shipment.di'

/**
 * Controller for retrieving a single Shipment by its ID.
 */
export class ShipmentGetFinderController implements Controller {
	/**
	 * Handles the request to get a Shipment by ID.
	 * @param {Request} req - The Express request object, containing the brand ID in `req.params`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params
			const get: ShipmentFinder = container.resolve(ShipmentDependencies.Finder)
			const data = await get.run({ id })
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
