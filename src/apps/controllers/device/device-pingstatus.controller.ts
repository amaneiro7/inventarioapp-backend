import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type DeviceMonitoring } from '../../../Contexts/Device/Device/application/DeviceMonitoring'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { DeviceDependencies } from '../../di/device/device.di'

export class DevicePingStatusController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const pingMonitoring: DeviceMonitoring = container.resolve(DeviceDependencies.DeviceMonitoring)
			const data = await pingMonitoring.run()
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}
