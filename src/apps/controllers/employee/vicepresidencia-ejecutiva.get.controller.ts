import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type VicepresidenciaEjecutivaFinder } from '../../../Contexts/employee/VicepresidenciaEjecutiva/application/VicepresidenciaEjecutivaFinder'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { VicepresidenciaEjecutivaDependencies } from '../../di/employee/vicepresidencia-ejecutiva.di'

/**
 * Controller for retrieving a single VicepresidenciaEjecutiva by its ID.
 */
export class VicepresidenciaEjecutivaGetController implements Controller {
	/**
	 * Handles the request to get a VicepresidenciaEjecutiva by ID.
	 * @param {Request} req - The Express request object, containing the VicepresidenciaEjecutiva ID in `req.params`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params
			const get: VicepresidenciaEjecutivaFinder = container.resolve(VicepresidenciaEjecutivaDependencies.Finder)
			const data = await get.run({ id })
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
