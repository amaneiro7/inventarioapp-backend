import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { HistoryDependencies } from '../../di/history/history.di'
import { type HistoryDashboard } from '../../../Contexts/History/application/HistoryDashboard'

/**
 * Controller for retrieving history dashboard data.
 */
export class HistoryDashboardGetController implements Controller {
	/**
	 * Handles the request to get history dashboard data.
	 * @param {Request} req - The Express request object.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: HistoryDashboard = container.resolve(HistoryDependencies.HistoryDashboard)

			const data = await getAll.run()
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
