import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type CentroTrabajoFinder } from '../../../Contexts/employee/CentroTrabajo/application/CentroTrabajoFinder'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { CentroTrabajoDependencies } from '../../di/employee/centro-trabajo.di'

/**
 * Controller for retrieving a single CentroTrabajo by its ID.
 */
export class CentroTrabajoGetController implements Controller {
	/**
	 * Handles the request to get a CentroTrabajo by ID.
	 * @param {Request} req - The Express request object, containing the CentroTrabajo ID in `req.params`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const id = String(req.params.id)
			const get: CentroTrabajoFinder = container.resolve(CentroTrabajoDependencies.Finder)
			const data = await get.run({ id })
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
