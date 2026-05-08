import type { Request, Response, NextFunction } from 'express'
import { type Controller } from '../controller'
import { type UnidadUpdater } from '../../../Contexts/employee/Unidad/application/UnidadUpdater'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { UnidadDependencies } from '../../di/employee/unidad.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for updating an existing Unidad entry.
 */
export class UnidadPatchController implements Controller {
	/**
	 * Handles the request to update a Unidad entry.
	 * @param {Request} req - The Express request object, containing the Unidad ID in `req.params` and update parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const id = String(req.params.id)
			const update: UnidadUpdater = container.resolve(UnidadDependencies.Updater)
			await update.run({ id, params })
			res.status(httpStatus[200].statusCode).send({
				message: SUCCESS_MESSAGES.UNIDAD_UPDATED
			})
		} catch (error) {
			next(error)
		}
	}
}
