import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type DepartamentoFinder } from '../../../Contexts/employee/Departamento/application/DepartamentoFinder'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { DepartamentoDependencies } from '../../di/employee/departamento.di'

export class DepartamentoGetController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params
			const get: DepartamentoFinder = container.resolve(DepartamentoDependencies.Finder)
			const data = await get.run({ id })
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}
