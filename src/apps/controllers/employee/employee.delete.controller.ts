import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type EmployeeRemover } from '../../../Contexts/employee/Employee/application/EmployeeRemover'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { EmployeeDependencies } from '../../di/employee/employee.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for deleting an employee.
 */
export class EmployeeDeleteController implements Controller {
	/**
	 * Handles the request to delete an employee by their ID.
	 * @param {Request} req - The Express request object, containing the employee ID in `req.params`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params
			const remover: EmployeeRemover = container.resolve(EmployeeDependencies.Remover)
			await remover.run({ id })
			res.status(httpStatus[200].statusCode).send({
				message: SUCCESS_MESSAGES.EMPLOYEE_DELETED
			})
		} catch (error) {
			next(error)
		}
	}
}
