import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type LocationMonitoringFinderAll } from '../../../Contexts/Location/LocationMonitoring/application/LocationMonitoringFinderAll'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { LocationMonitoringDependencies } from '../../di/location/location-monitoring.di'
import { CriteriaFromUrlConverter } from '../../../Contexts/Shared/infrastructure/criteria/CriteriaFromUrlConverter'

export class LocationPingStatusController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: LocationMonitoringFinderAll = container.resolve(
				LocationMonitoringDependencies.MonitoringFinderAll
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
