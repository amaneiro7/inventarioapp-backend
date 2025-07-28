import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type VicepresidenciaUpdater } from '../../../Contexts/employee/Vicepresidencia/application/VicepresidenciaUpdater'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { VicepresidenciaDependencies } from '../../di/employee/vicepresidencia.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for updating an existing Vicepresidencia entry.
 */
export class VicepresidenciaPatchController implements Controller {
	/**
	 * Handles the request to update a Vicepresidencia entry.
	 * @param {Request} req - The Express request object, containing the Vicepresidencia ID in `req.params` and update parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const { id } = req.params
			const update: VicepresidenciaUpdater = container.resolve(VicepresidenciaDependencies.Updater)
			await update.run({ id, params })
			res.status(httpStatus[200].statusCode).send({
				message: SUCCESS_MESSAGES.VICEPRESIDENCIA_UPDATED
			})
		} catch (error) {
			next(error)
		}
	}
}
