import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type CentroCostoUpdater } from '../../../Contexts/employee/CentroCosto/application/CentroCostoUpdater'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { CentroCostoDependencies } from '../../di/employee/centro-costo.di'

export class CentroCostoPatchController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const { id } = req.params
			const update: CentroCostoUpdater = container.resolve(
				CentroCostoDependencies.Updater
			)
			await update.run({ id, params })
			res.status(httpStatus.CREATED).send({
				message: 'Empleado actualizado exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
