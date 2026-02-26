import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type DirectivaFinder } from '../../../Contexts/employee/Directiva/application/DirectivaFinder'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { DirectivaDependencies } from '../../di/employee/directiva.di'

/**
 * Controller for retrieving a single Directiva by its ID.
 */
export class DirectivaGetController implements Controller {
	/**
	 * Handles the request to get a Directiva by ID.
	 * @param {Request} req - The Express request object, containing the Directiva ID in `req.params`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const id = String(req.params.id)
			const get: DirectivaFinder = container.resolve(DirectivaDependencies.Finder)
			const data = await get.run({ id })
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
