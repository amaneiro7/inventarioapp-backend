import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type LocationMonitoringDashboardByLocation } from '../../../Contexts/Location/LocationMonitoring/application/LocationMonitoringDashboardByLocation'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { LocationMonitoringDependencies } from '../../di/location/location-monitoring.di'
import { CriteriaFromUrlConverter } from '../../../Contexts/Shared/infrastructure/criteria/CriteriaFromUrlConverter'

export class LocationMonitoringDashboardByLocationGetController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const get: LocationMonitoringDashboardByLocation = container.resolve(
				LocationMonitoringDependencies.LocationMonitoringDashboardByLocation
			)
			const convert = new CriteriaFromUrlConverter()
			const query = convert.toCriteria(req)
			const data = await get.run(query)
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
