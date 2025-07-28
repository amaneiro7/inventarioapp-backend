import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type EmployeeSearchByCriteria } from '../../../Contexts/employee/Employee/application/EmployeeByCriteriaSearcher'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { EmployeeDependencies } from '../../di/employee/employee.di'

/**
 * Controller for searching employees by criteria.
 */
export class EmployeeSearchByCriteriaController implements Controller {
	/**
	 * Handles the request to search employees by criteria.
	 * @param {Request} req - The Express request object, containing criteria in `req.criteria`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getByCriteria: EmployeeSearchByCriteria = container.resolve(EmployeeDependencies.SearchByCriteria)
			const data = await getByCriteria.run(req.criteria!)
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
