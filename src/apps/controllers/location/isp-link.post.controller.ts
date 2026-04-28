import type { Request, Response, NextFunction } from 'express'
import { type Controller } from '../controller'
import { type ISPLinkCreator } from '../../../Contexts/Location/ISPLinks/application/ISPLinkCreator'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { ISPLinkDependencies } from '../../di/location/isp-link.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

interface ISPLinkRequest extends Request {
	body: {
		name: string
	}
}

/**
 * Controller for creating a new ISPLink.
 */
export class ISPLinkPostController implements Controller {
	/**
	 * Handles the request to create a new ISPLink.
	 * @param {ISPLinkRequest} req - The Express request object, containing city parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: ISPLinkRequest, res: Response, next: NextFunction): Promise<void> {
		try {
			const { name } = req.body
			const create: ISPLinkCreator = container.resolve(ISPLinkDependencies.Creator)
			await create.run({ name })
			res.status(httpStatus[201].statusCode).json({
				message: SUCCESS_MESSAGES.ISP_LINK_CREATED
			})
		} catch (error) {
			next(error)
		}
	}
}
