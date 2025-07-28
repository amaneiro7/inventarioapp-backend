import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type CentroCostoCreator } from '../../../Contexts/employee/CentroCosto/application/CentroCostoCreator'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { CentroCostoDependencies } from '../../di/employee/centro-costo.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for creating a new CentroCosto entry.
 */
export class CentroCostoPostController implements Controller {
	/**
	 * Handles the request to create a new CentroCosto entry.
	 * @param {Request} req - The Express request object, containing CentroCosto parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const create: CentroCostoCreator = container.resolve(CentroCostoDependencies.Creator)
			await create.run({ params })
			res.status(httpStatus[201].statusCode).send({
				message: SUCCESS_MESSAGES.CENTRO_COSTO_CREATED
			})
		} catch (error) {
			next(error)
		}
	}
}
