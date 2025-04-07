import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type AdministrativeRegionFinderAll } from '../../../Contexts/Location/AdministrativeRegion/application/AdministrativeRegionFinderAll'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { AdministrativeRegionDependencies } from '../../di/location/administrative-region.di'
import { CriteriaFromUrlConverter } from '../../../Contexts/Shared/infrastructure/criteria/CriteriaFromUrlConverter'

export class AdministrativeRegionGetAllController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: AdministrativeRegionFinderAll = container.resolve(AdministrativeRegionDependencies.FinderAll)
			const convert = new CriteriaFromUrlConverter()
			const query = convert.toCriteria(req)

			const data = await getAll.run(query)
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}
