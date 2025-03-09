import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type DirectivaUpdater } from '../../../Contexts/employee/Directiva/application/DirectivaUpdater'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { DirectivaDependencies } from '../../di/employee/directiva.di'

export class DirectivaPatchController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const { id } = req.params
			const update: DirectivaUpdater = container.resolve(DirectivaDependencies.Updater)
			await update.run({ id, params })
			res.status(httpStatus.CREATED).send({
				message: 'Empleado actualizado exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
