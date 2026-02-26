import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type CentroCostoUpdater } from '../../../Contexts/employee/CentroCosto/application/CentroCostoUpdater'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { CentroCostoDependencies } from '../../di/employee/centro-costo.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for updating an existing CentroCosto entry.
 */
export class CentroCostoPatchController implements Controller {
	/**
	 * Handles the request to update a CentroCosto entry.
	 * @param {Request} req - The Express request object, containing the CentroCosto ID in `req.params` and update parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const id = String(req.params.id)
			const update: CentroCostoUpdater = container.resolve(CentroCostoDependencies.Updater)
			await update.run({ id, params })
			res.status(httpStatus[200].statusCode).send({
				message: SUCCESS_MESSAGES.CENTRO_COSTO_UPDATED
			})
		} catch (error) {
			next(error)
		}
	}
}
