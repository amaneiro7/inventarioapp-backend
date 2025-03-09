import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type DepartamentoUpdater } from '../../../Contexts/employee/Departamento/application/DepartamentoUpdater'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { DepartamentoDependencies } from '../../di/employee/departamento.di'

export class DepartamentoPatchController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const { id } = req.params
			const update: DepartamentoUpdater = container.resolve(DepartamentoDependencies.Updater)
			await update.run({ id, params })
			res.status(httpStatus.CREATED).send({
				message: 'Empleado actualizado exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
