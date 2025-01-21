import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type TypeOfSiteFinderAll } from '../../../Contexts/Location/TypeOfSite/application/TypeOfSiteFinderAll'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { TypeOfSiteDependencies } from '../../di/location/type-of-site.di'

export class TypeOfSiteGetAllController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: TypeOfSiteFinderAll = container.resolve(
				TypeOfSiteDependencies.FinderAll
			)
			const data = await getAll.run()
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}
