import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type SiteFinder } from '../../../Contexts/Location/Site/application/SiteFinder'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { SiteDependencies } from '../../di/location/site.di'

/**
 * Controller for retrieving a single Site by its ID.
 */
export class SiteGetController implements Controller {
	/**
	 * Handles the request to get a Site by ID.
	 * @param {Request} req - The Express request object, containing the site ID in `req.params`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params
			const get: SiteFinder = container.resolve(SiteDependencies.Finder)
			const data = await get.run({ id })
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
