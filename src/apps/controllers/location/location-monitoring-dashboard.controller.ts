import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type LocationMonitoringDashboard } from '../../../Contexts/Location/LocationMonitoring/application/LocationMonitoringDashboard'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { CriteriaFromUrlConverter } from '../../../Contexts/Shared/infrastructure/criteria/CriteriaFromUrlConverter'
import { LocationMonitoringDependencies } from '../../di/location/location-monitoring.di'

export class LocationMonitoringDashboardGetController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: LocationMonitoringDashboard = container.resolve(
				LocationMonitoringDependencies.LocationMonitoringDashboard
			)
			const convert = new CriteriaFromUrlConverter()
			const query = convert.toCriteria(req)
			const data = await getAll.run(query)
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}
