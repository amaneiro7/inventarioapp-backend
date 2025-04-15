import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type CargoCreator } from '../../../Contexts/employee/Cargo/application/CargoCreator'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { CargoDependencies } from '../../di/employee/cargo.di'

export class CargoPostController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const create: CargoCreator = container.resolve(CargoDependencies.Creator)
			await create.run({ params })
			res.status(httpStatus.CREATED).send({
				message: 'Cargo creado exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
