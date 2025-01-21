import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type DirectivaFinderAll } from '../../../Contexts/employee/Directiva/application/DirectivaFinderAll'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { DirectivaDependencies } from '../../di/employee/directiva.di'

export class DirectivaGetAllController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: DirectivaFinderAll = container.resolve(
				DirectivaDependencies.FinderAll
			)
			const data = await getAll.run()
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}
