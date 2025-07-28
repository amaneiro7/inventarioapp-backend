import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type CargoFinderAll } from '../../../Contexts/employee/Cargo/application/CargoFinderAll'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { CargoDependencies } from '../../di/employee/cargo.di'

/**
 * Controller for retrieving all Cargo entries.
 */
export class CargoGetAllController implements Controller {
	/**
	 * Handles the request to get all Cargo entries.
	 * @param {Request} req - The Express request object, containing criteria in `req.criteria`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: CargoFinderAll = container.resolve(CargoDependencies.FinderAll)
			const data = await getAll.run(req.criteria!)
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
