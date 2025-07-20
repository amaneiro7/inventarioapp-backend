import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type OperatingSystemArqFinderAll } from '../../../Contexts/Features/OperatingSystem/OperatingSystemArq/application/OperatingSystemArqFinderAll'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { OperatingSystemArqDependencies } from '../../di/operating-system/operating-system-arq.di'
import { CriteriaFromUrlConverter } from '../../../Contexts/Shared/infrastructure/criteria/CriteriaFromUrlConverter'

export class OperatingSystemArqGetAllController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: OperatingSystemArqFinderAll = container.resolve(OperatingSystemArqDependencies.FinderAll)
			const convert = new CriteriaFromUrlConverter()
			const query = convert.toCriteria(req)

			const data = await getAll.run(query)
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
