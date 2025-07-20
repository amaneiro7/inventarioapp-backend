import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type StatusFinderAll } from '../../../Contexts/Device/Status/application/StatusFinderAll'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { StatusDependencies } from '../../di/status/status.di'
import { CriteriaFromUrlConverter } from '../../../Contexts/Shared/infrastructure/criteria/CriteriaFromUrlConverter'

export class StatusGetAllController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: StatusFinderAll = container.resolve(StatusDependencies.FinderAll)
			const convert = new CriteriaFromUrlConverter()
			const query = convert.toCriteria(req)
			const data = await getAll.run(query)
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
