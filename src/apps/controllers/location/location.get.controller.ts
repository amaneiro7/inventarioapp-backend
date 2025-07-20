import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type LocationFinder } from '../../../Contexts/Location/Location/application/LocationFinder'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { LocationDependencies } from '../../di/location/location.di'

export class LocationGetController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params
			const get: LocationFinder = container.resolve(LocationDependencies.Finder)
			const data = await get.run({ id })
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
