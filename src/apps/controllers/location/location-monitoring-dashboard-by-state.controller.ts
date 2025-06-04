import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type LocationMonitoringDashboardByState } from '../../../Contexts/Location/LocationMonitoring/application/LocationMonitoringDashboardByState'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { LocationMonitoringDependencies } from '../../di/location/location-monitoring.di'

export class LocationMonitoringDashboardByStateGetController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const get: LocationMonitoringDashboardByState = container.resolve(
				LocationMonitoringDependencies.LocationMonitoringDashboardByState
			)
			const data = await get.run()
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}
