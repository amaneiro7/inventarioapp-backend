import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type VicepresidenciaCreator } from '../../../Contexts/employee/Vicepresidencia/application/VicepresidenciaCreator'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { VicepresidenciaDependencies } from '../../di/employee/vicepresidencia.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for creating a new Vicepresidencia entry.
 */
export class VicepresidenciaPostController implements Controller {
	/**
	 * Handles the request to create a new Vicepresidencia entry.
	 * @param {Request} req - The Express request object, containing Vicepresidencia parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const create: VicepresidenciaCreator = container.resolve(VicepresidenciaDependencies.Creator)
			await create.run({ params })
			res.status(httpStatus[201].statusCode).send({
				message: SUCCESS_MESSAGES.VICEPRESIDENCIA_CREATED
			})
		} catch (error) {
			next(error)
		}
	}
}
