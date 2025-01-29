import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type LocationSearchByCriteria } from '../../../Contexts/Location/Location/application/LocationSearchByCriteria'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { LocationDependencies } from '../../di/location/location.di'
import { CriteriaFromUrlConverter } from '../../../Contexts/Shared/infrastructure/criteria/CriteriaFromUrlConverter'

export class LocationSearchByCriteriaController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getByCriteria: LocationSearchByCriteria = container.resolve(
				LocationDependencies.SearchByCriteria
			)
			const convert = new CriteriaFromUrlConverter()
			const query = convert.toCriteria(req)

			const data = await getByCriteria.run(query)
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}
