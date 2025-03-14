import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type DepartamentoCreator } from '../../../Contexts/employee/Departamento/application/DepartamentoCreator'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { DepartamentoDependencies } from '../../di/employee/departamento.di'

export class DepartamentoPostController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const create: DepartamentoCreator = container.resolve(DepartamentoDependencies.Creator)
			await create.run(params)
			res.status(httpStatus.CREATED).send({
				message: 'Departamento creado exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
