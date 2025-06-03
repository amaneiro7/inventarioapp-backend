import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type DeviceMonitoringDashboardByState } from '../../../Contexts/Device/DeviceMonitoring/application/DeviceMonitoringDashboardByState'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { ComputerDashboardDependencies } from '../../di/device/computerDashboard.di'

export class DeviceMonitoringDashboardByStateGetController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const get: DeviceMonitoringDashboardByState = container.resolve(
				ComputerDashboardDependencies.DeviceMonitoringDashboardByState
			)
			const data = await get.run()
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}
