import type { Request, Response, NextFunction } from 'express'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { ISPLinkDependencies } from '../../di/location/isp-link.di'
import type { Controller } from '../controller'
import type { ISPLinkFinderAll } from '../../../Contexts/Location/ISPLinks/application/ISPLinkFinderAll'

/**
 * Controller for retrieving all ISPLink entries.
 */
export class ISPLinkGetAllController implements Controller {
	/**
	 * Handles the request to get all ISPLink entries.
	 * @param {Request} req - The Express request object, containing criteria in `req.criteria`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: ISPLinkFinderAll = container.resolve(ISPLinkDependencies.FinderAll)
			const data = await getAll.run(req.criteria!)
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
