import type { Request, Response, NextFunction } from 'express'
import { type Controller } from '../controller'
import { type UnidadFinder } from '../../../Contexts/employee/Unidad/application/UnidadFInder'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { UnidadDependencies } from '../../di/employee/unidad.di'

/**
 * Controller for retrieving a single Unidad by its ID.
 */
export class UnidadGetController implements Controller {
	/**
	 * Handles the request to get a Unidad by ID.
	 * @param {Request} req - The Express request object, containing the Unidad ID in `req.params`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const id = String(req.params.id)
			const get: UnidadFinder = container.resolve(UnidadDependencies.Finder)
			const data = await get.run({ id })
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
