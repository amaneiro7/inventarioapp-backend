import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { ComputerDashboardDependencies } from '../../di/device/computerDashboard.di'
import { type GeneralDashboard } from '../../../Contexts/Device/Inventroy/application/GeneralDashboard'

/**
 * Controller for retrieving general dashboard data.
 */
export class GeneralDashboardGetController implements Controller {
	/**
	 * Handles the request to get general dashboard data.
	 * @param {Request} req - The Express request object.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: GeneralDashboard = container.resolve(ComputerDashboardDependencies.GeneralDashboard)

			const data = await getAll.run()
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
