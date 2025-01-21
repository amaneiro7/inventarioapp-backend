import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type LocationFinderAll } from '../../../Contexts/Location/Location/application/LocationFinderAll'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { LocationDependencies } from '../../di/location/location.di'

export class LocationGetAllController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: LocationFinderAll = container.resolve(
				LocationDependencies.FinderAll
			)
			const data = await getAll.run()
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}
