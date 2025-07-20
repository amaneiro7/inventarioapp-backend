import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type LocationStatusFinderAll } from '../../../Contexts/Location/LocationStatus/application/LocationStatusFinderAll'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { CriteriaFromUrlConverter } from '../../../Contexts/Shared/infrastructure/criteria/CriteriaFromUrlConverter'
import { LocationStatusDependencies } from '../../di/location/operational-status.di'

export class LocationStatusGetAllController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: LocationStatusFinderAll = container.resolve(LocationStatusDependencies.FinderAll)
			const convert = new CriteriaFromUrlConverter()
			const query = convert.toCriteria(req)

			const data = await getAll.run(query)
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
