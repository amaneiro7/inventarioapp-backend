import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { ComputerDashboardDependencies } from '../../di/device/computerDashboard.di'
import { type GeneralDashboard } from '../../../Contexts/Device/Inventroy/application/GeneralDashboard'

export class GeneralDashboardGetController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: GeneralDashboard = container.resolve(ComputerDashboardDependencies.GeneralDashboard)

			const data = await getAll.run()
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}
