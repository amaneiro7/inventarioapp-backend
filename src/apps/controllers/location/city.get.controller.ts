import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type CityFinder } from '../../../Contexts/Location/City/application/CityFinder'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { CityDependencies } from '../../di/location/city.di'

export class CityGetController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params
			const get: CityFinder = container.resolve(CityDependencies.Finder)
			const data = await get.run({ id })
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
