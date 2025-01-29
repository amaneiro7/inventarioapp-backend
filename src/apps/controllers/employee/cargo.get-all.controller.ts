import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type CargoFinderAll } from '../../../Contexts/employee/Cargo/application/CargoFinderAll'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { CargoDependencies } from '../../di/employee/cargo.di'
import { CriteriaFromUrlConverter } from '../../../Contexts/Shared/infrastructure/criteria/CriteriaFromUrlConverter'

export class CargoGetAllController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: CargoFinderAll = container.resolve(
				CargoDependencies.FinderAll
			)
			const convert = new CriteriaFromUrlConverter()
			const query = convert.toCriteria(req)

			const data = await getAll.run(query)
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}
