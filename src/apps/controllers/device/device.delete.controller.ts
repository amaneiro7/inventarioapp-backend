import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { DeviceDependencies } from '../../di/device/device.di'
import { DeviceRemover } from '../../../Contexts/Device/Device/application/DeviceRemover'

export class DeviceDeleteController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params
			const remover: DeviceRemover = container.resolve(
				DeviceDependencies.Remover
			)
			await remover.run({ id })
			res.status(httpStatus.OK).send({
				message: 'Dispositivo eliminado exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
