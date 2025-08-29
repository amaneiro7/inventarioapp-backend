import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type ShipmentCreator } from '../../../Contexts/Shipment/Shipment/application/ShipmentCreator'
import { type JwtPayloadUser } from '../../../Contexts/Auth/domain/GenerateToken'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { SUCCESS_MESSAGES } from '../../constants/messages'
import { ShipmentDependencies } from '../../di/shipment/shipment.di'

/**
 * Controller for creating a new Shipment.
 */
export class ShipmentPostController implements Controller {
	/**
	 * Handles the request to create a new Shipment.
	 * @param {Request} req - The Express request object, containing brand parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const user = req.user as JwtPayloadUser
			const params = req.body
			const create: ShipmentCreator = container.resolve(ShipmentDependencies.Creator)
			await create.run({ params, user })
			res.status(httpStatus[201].statusCode).json({
				message: SUCCESS_MESSAGES.SHIPMENT_UPDATED
			})
		} catch (error) {
			next(error)
		}
	}
}
