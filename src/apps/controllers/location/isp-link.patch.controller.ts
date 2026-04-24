import type { Request, Response, NextFunction } from 'express'
import type { Controller } from '../controller'
import type { ISPLinkUpdater } from '../../../Contexts/Location/ISPLinks/application/ISPLinkUpdater'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { ISPLinkDependencies } from '../../di/location/isp-link.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

interface ISPLinkRequest extends Request {
	params: {
		id: string
	}
	body: {
		name: string
	}
}

/**
 * Controller for updating an existing ISPLink.
 */
export class ISPLinkPatchController implements Controller {
	/**
	 * Handles the request to update a ISPLink.
	 * @param {ISPLinkRequest} req - The Express request object, containing the city ID in `req.params` and update parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: ISPLinkRequest, res: Response, next: NextFunction): Promise<void> {
		try {
			const { name } = req.body
			const id = String(req.params.id)
			const update: ISPLinkUpdater = container.resolve(ISPLinkDependencies.Updater)
			await update.run({ id, params: { name } })
			res.status(httpStatus[200].statusCode).json({
				message: SUCCESS_MESSAGES.ISP_LINK_UPDATED
			})
		} catch (error) {
			next(error)
		}
	}
}
