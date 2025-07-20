import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type CargoFinder } from '../../../Contexts/employee/Cargo/application/CargoFinder'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { CargoDependencies } from '../../di/employee/cargo.di'

export class CargoGetController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params
			const get: CargoFinder = container.resolve(CargoDependencies.Finder)
			const data = await get.run({ id })
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
