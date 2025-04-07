import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type RegionFinder } from '../../../Contexts/Location/Region/application/RegionFinder'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { RegionDependencies } from '../../di/location/region.di'

export class RegionGetController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params
			const get: RegionFinder = container.resolve(RegionDependencies.Finder)
			const data = await get.run({ id })
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}
