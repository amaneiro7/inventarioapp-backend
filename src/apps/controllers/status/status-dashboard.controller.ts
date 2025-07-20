import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { StatusDependencies } from '../../di/status/status.di'
import { type StatusDashboard } from '../../../Contexts/Device/Inventroy/application/StatusDashboard'

export class StatusDashboardGetController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: StatusDashboard = container.resolve(StatusDependencies.StatusDashboard)

			const data = await getAll.run()
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
