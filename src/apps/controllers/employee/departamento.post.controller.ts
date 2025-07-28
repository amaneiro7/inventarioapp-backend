import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type DepartamentoCreator } from '../../../Contexts/employee/Departamento/application/DepartamentoCreator'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { DepartamentoDependencies } from '../../di/employee/departamento.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for creating a new Departamento entry.
 */
export class DepartamentoPostController implements Controller {
	/**
	 * Handles the request to create a new Departamento entry.
	 * @param {Request} req - The Express request object, containing Departamento parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const create: DepartamentoCreator = container.resolve(DepartamentoDependencies.Creator)
			await create.run({ params })
			res.status(httpStatus[201].statusCode).send({
				message: SUCCESS_MESSAGES.DEPARTAMENTO_CREATED
			})
		} catch (error) {
			next(error)
		}
	}
}
