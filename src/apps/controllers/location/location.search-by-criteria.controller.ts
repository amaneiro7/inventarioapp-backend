import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type LocationSearchByCriteria } from '../../../Contexts/Location/Location/application/LocationSearchByCriteria'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { LocationDependencies } from '../../di/location/location.di'

/**
 * Controller for searching locations by criteria.
 */
export class LocationSearchByCriteriaController implements Controller {
	/**
	 * Handles the request to search locations by criteria.
	 * @param {Request} req - The Express request object, containing criteria in `req.criteria`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getByCriteria: LocationSearchByCriteria = container.resolve(LocationDependencies.SearchByCriteria)
			const data = await getByCriteria.run(req.criteria!)
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
