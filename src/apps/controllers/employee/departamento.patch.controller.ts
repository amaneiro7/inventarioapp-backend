import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type DepartamentoUpdater } from '../../../Contexts/employee/Departamento/application/DepartamentoUpdater'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { DepartamentoDependencies } from '../../di/employee/departamento.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for updating an existing Departamento entry.
 */
export class DepartamentoPatchController implements Controller {
	/**
	 * Handles the request to update a Departamento entry.
	 * @param {Request} req - The Express request object, containing the Departamento ID in `req.params` and update parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const { id } = req.params
			const update: DepartamentoUpdater = container.resolve(DepartamentoDependencies.Updater)
			await update.run({ id, params })
			res.status(httpStatus[200].statusCode).send({
				message: SUCCESS_MESSAGES.DEPARTAMENTO_UPDATED
			})
		} catch (error) {
			next(error)
		}
	}
}
