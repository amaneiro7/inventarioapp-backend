import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type LocationFinder } from '../../../Contexts/Location/Location/application/LocationFinder'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { LocationDependencies } from '../../di/location/location.di'

/**
 * Controller for retrieving a single Location by its ID.
 */
export class LocationGetController implements Controller {
	/**
	 * Handles the request to get a Location by ID.
	 * @param {Request} req - The Express request object, containing the location ID in `req.params`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params
			const get: LocationFinder = container.resolve(LocationDependencies.Finder)
			const data = await get.run({ id })
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
