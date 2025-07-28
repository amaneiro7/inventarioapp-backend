import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type LocationStatusFinderAll } from '../../../Contexts/Location/LocationStatus/application/LocationStatusFinderAll'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { LocationStatusDependencies } from '../../di/location/operational-status.di'

/**
 * Controller for retrieving all LocationStatus entries.
 */
export class LocationStatusGetAllController implements Controller {
	/**
	 * Handles the request to get all LocationStatus entries.
	 * @param {Request} req - The Express request object, containing criteria in `req.criteria`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: LocationStatusFinderAll = container.resolve(LocationStatusDependencies.FinderAll)
			const data = await getAll.run(req.criteria!)
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
