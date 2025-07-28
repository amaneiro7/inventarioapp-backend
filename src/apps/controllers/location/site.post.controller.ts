import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type SiteCreator } from '../../../Contexts/Location/Site/application/SiteCreator'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { SiteDependencies } from '../../di/location/site.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for creating a new Site.
 */
export class SitePostController implements Controller {
	/**
	 * Handles the request to create a new Site.
	 * @param {Request} req - The Express request object, containing site parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const create: SiteCreator = container.resolve(SiteDependencies.Creator)
			await create.run(params)
			res.status(httpStatus[201].statusCode).send({
				message: SUCCESS_MESSAGES.SITE_CREATED
			})
		} catch (error) {
			next(error)
		}
	}
}
