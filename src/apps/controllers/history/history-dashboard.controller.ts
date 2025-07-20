import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { HistoryDependencies } from '../../di/history/history.di'
import { type HistoryDashboard } from '../../../Contexts/History/application/HistroyDashboard'

export class HistoryDashboardGetController implements Controller {
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
