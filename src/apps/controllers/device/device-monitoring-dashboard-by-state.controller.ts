import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type DeviceMonitoringDashboardByState } from '../../../Contexts/Device/DeviceMonitoring/application/DeviceMonitoringDashboardByState'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { ComputerDashboardDependencies } from '../../di/device/computerDashboard.di'
import { CriteriaFromUrlConverter } from '../../../Contexts/Shared/infrastructure/criteria/CriteriaFromUrlConverter'

export class DeviceMonitoringDashboardByStateGetController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const get: DeviceMonitoringDashboardByState = container.resolve(
				ComputerDashboardDependencies.DeviceMonitoringDashboardByState
			)
			const convert = new CriteriaFromUrlConverter()
			const query = convert.toCriteria(req)
			const data = await get.run(query)
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}
