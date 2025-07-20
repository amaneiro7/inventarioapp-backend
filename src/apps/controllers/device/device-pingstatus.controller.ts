import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type DeviceMonitoringFinderAll } from '../../../Contexts/Device/DeviceMonitoring/application/DeviceMonitoringFinderAll'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { DeviceDependencies } from '../../di/device/device.di'
import { CriteriaFromUrlConverter } from '../../../Contexts/Shared/infrastructure/criteria/CriteriaFromUrlConverter'

export class DevicePingStatusController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: DeviceMonitoringFinderAll = container.resolve(DeviceDependencies.MonitoringFinderAll)
			const convert = new CriteriaFromUrlConverter()
			const query = convert.toCriteria(req)
			const data = await getAll.run(query)
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
