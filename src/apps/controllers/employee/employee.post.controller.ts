import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type EmployeeCreator } from '../../../Contexts/employee/Employee/application/EmployeeCreator'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { EmployeeDependencies } from '../../di/employee/employee.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for creating a new Employee entry.
 */
export class EmployeePostController implements Controller {
	/**
	 * Handles the request to create a new Employee entry.
	 * @param {Request} req - The Express request object, containing Employee parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const create: EmployeeCreator = container.resolve(EmployeeDependencies.Creator)
			await create.run({ params })
			res.status(httpStatus[201].statusCode).send({
				message: SUCCESS_MESSAGES.EMPLOYEE_CREATED
			})
		} catch (error) {
			next(error)
		}
	}
}
