import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type SiteFinderAll } from '../../../Contexts/Location/Site/application/SiteFinderAll'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { SiteDependencies } from '../../di/location/site.di'

/**
 * Controller for retrieving all Site entries.
 */
export class SiteGetAllController implements Controller {
	/**
	 * Handles the request to get all Site entries.
	 * @param {Request} req - The Express request object, containing criteria in `req.criteria`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: SiteFinderAll = container.resolve(SiteDependencies.FinderAll)
			const data = await getAll.run(req.criteria!)
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
