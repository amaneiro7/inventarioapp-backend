import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type StateFinderAll } from '../../../Contexts/Location/State/application/StateFinderAll'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { StateDependencies } from '../../di/location/state.di'

/**
 * Controller for retrieving all State entries.
 */
export class StateGetAllController implements Controller {
	/**
	 * Handles the request to get all State entries.
	 * @param {Request} req - The Express request object, containing criteria in `req.criteria`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: StateFinderAll = container.resolve(StateDependencies.FinderAll)
			const data = await getAll.run(req.criteria!)
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
