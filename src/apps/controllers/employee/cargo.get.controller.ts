import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type CargoFinder } from '../../../Contexts/employee/Cargo/application/CargoFinder'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { CargoDependencies } from '../../di/employee/cargo.di'

/**
 * Controller for retrieving a single Cargo by its ID.
 */
export class CargoGetController implements Controller {
	/**
	 * Handles the request to get a Cargo by ID.
	 * @param {Request} req - The Express request object, containing the Cargo ID in `req.params`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params
			const get: CargoFinder = container.resolve(CargoDependencies.Finder)
			const data = await get.run({ id })
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
