import type { Request, Response, NextFunction } from 'express'
import { type Controller } from '../controller'
import { type UnidadCreator } from '../../../Contexts/employee/Unidad/application/UnidadCreator'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { UnidadDependencies } from '../../di/employee/unidad.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for creating a new Unidad entry.
 */
export class UnidadPostController implements Controller {
	/**
	 * Handles the request to create a new Unidad entry.
	 * @param {Request} req - The Express request object, containing Unidad parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const create: UnidadCreator = container.resolve(UnidadDependencies.Creator)
			await create.run({ params })
			res.status(httpStatus[201].statusCode).send({
				message: SUCCESS_MESSAGES.UNIDAD_CREATED
			})
		} catch (error) {
			next(error)
		}
	}
}
