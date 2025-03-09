import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type DeviceSearchByCriteria } from '../../../Contexts/Device/Device/application/DeviceByCriteriaSearcher'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { DeviceDependencies } from '../../di/device/device.di'

import { CriteriaFromUrlConverter } from '../../../Contexts/Shared/infrastructure/criteria/CriteriaFromUrlConverter'

export class DeviceSearchByCriteriaController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const convert = new CriteriaFromUrlConverter()
			const query = convert.toCriteria(req)
			const getByCriteria: DeviceSearchByCriteria = container.resolve(DeviceDependencies.SearchByCriteria)
			const data = await getByCriteria.run(query)
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}
