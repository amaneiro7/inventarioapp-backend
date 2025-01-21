import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type DevicesFinderAll } from '../../../Contexts/Device/Device/application/DeviceFinderAll'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { DeviceDependencies } from '../../di/device/device.di'

export class DeviceGetAllController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: DevicesFinderAll = container.resolve(
				DeviceDependencies.FinderAll
			)
			const data = await getAll.run()
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}
