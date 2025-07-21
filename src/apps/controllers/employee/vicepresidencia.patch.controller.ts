import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type VicepresidenciaUpdater } from '../../../Contexts/employee/Vicepresidencia/application/VicepresidenciaUpdater'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { VicepresidenciaDependencies } from '../../di/employee/vicepresidencia.di'

export class VicepresidenciaPatchController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const { id } = req.params
			const update: VicepresidenciaUpdater = container.resolve(VicepresidenciaDependencies.Updater)
			await update.run({ id, params })
			res.status(httpStatus[200].statusCode).send({
				message: 'Vicepresidencia actualizado exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
