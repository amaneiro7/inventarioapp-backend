import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type CentroCostoFinderAll } from '../../../Contexts/employee/CentroCosto/application/CentroCostoFinderAll'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { CentroCostoDependencies } from '../../di/employee/centro-costo.di'

export class CentroCostoGetAllController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: CentroCostoFinderAll = container.resolve(
				CentroCostoDependencies.FinderAll
			)
			const data = await getAll.run()
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}
