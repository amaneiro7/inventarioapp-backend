import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type OperatingSystemArqFinderAll } from '../../../Contexts/Features/OperatingSystem/OperatingSystemArq/application/OperatingSystemArqFinderAll'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { OperatingSystemArqDependencies } from '../../di/operating-system/operating-system-arq.di'

/**
 * Controller for retrieving all OperatingSystemArq entries.
 */
export class OperatingSystemArqGetAllController implements Controller {
	/**
	 * Handles the request to get all OperatingSystemArq entries.
	 * @param {Request} req - The Express request object, containing criteria in `req.criteria`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: OperatingSystemArqFinderAll = container.resolve(OperatingSystemArqDependencies.FinderAll)
			const data = await getAll.run(req.criteria!)
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
