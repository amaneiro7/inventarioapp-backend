import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type DirectivaFinder } from '../../../Contexts/employee/Directiva/application/DirectivaFinder'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { DirectivaDependencies } from '../../di/employee/directiva.di'

export class DirectivaGetController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params
			const get: DirectivaFinder = container.resolve(DirectivaDependencies.Finder)
			const data = await get.run({ id })
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}
