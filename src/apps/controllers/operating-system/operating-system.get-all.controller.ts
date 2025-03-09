import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type OperatingSystemFinderAll } from '../../../Contexts/Features/OperatingSystem/OperatingSystem/application/OperatingSystemFinderAll'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { OperatingSystemDependencies } from '../../di/operating-system/operating-system.di'
import { CriteriaFromUrlConverter } from '../../../Contexts/Shared/infrastructure/criteria/CriteriaFromUrlConverter'

export class OperatingSystemGetAllController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: OperatingSystemFinderAll = container.resolve(OperatingSystemDependencies.FinderAll)
			const convert = new CriteriaFromUrlConverter()
			const query = convert.toCriteria(req)

			const data = await getAll.run(query)
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}
