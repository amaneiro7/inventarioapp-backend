import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type CentroCostoCreator } from '../../../Contexts/employee/CentroCosto/application/CentroCostoCreator'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { CentroCostoDependencies } from '../../di/employee/centro-costo.di'

export class CentroCostoPostController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const create: CentroCostoCreator = container.resolve(CentroCostoDependencies.Creator)
			await create.run(params)
			res.status(httpStatus.CREATED).send({
				message: 'Empleado creado exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
