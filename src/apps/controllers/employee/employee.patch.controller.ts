import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type EmployeeUpdater } from '../../../Contexts/employee/Employee/application/EmployeeUpdater'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { EmployeeDependencies } from '../../di/employee/employee.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for updating an existing Employee entry.
 */
export class EmployeePatchController implements Controller {
	/**
	 * Handles the request to update an Employee entry.
	 * @param {Request} req - The Express request object, containing the Employee ID in `req.params` and update parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const id = String(req.params.id)
			const update: EmployeeUpdater = container.resolve(EmployeeDependencies.Updater)
			await update.run({ id, params })
			res.status(httpStatus[200].statusCode).send({
				message: SUCCESS_MESSAGES.EMPLOYEE_UPDATED
			})
		} catch (error) {
			next(error)
		}
	}
}
