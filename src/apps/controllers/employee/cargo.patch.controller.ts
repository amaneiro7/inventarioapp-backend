import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type CargoUpdater } from '../../../Contexts/employee/Cargo/application/CargoUpdater'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { CargoDependencies } from '../../di/employee/cargo.di'

export class CargoPatchController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const { id } = req.params
			const update: CargoUpdater = container.resolve(CargoDependencies.Updater)
			await update.run({ id, params })
			res.status(httpStatus[204].statusCode).send({
				message: 'Cargo actualizado exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
