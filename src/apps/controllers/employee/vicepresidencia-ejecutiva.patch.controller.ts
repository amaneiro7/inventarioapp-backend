import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type VicepresidenciaEjecutivaUpdater } from '../../../Contexts/employee/VicepresidenciaEjecutiva/application/VicepresidenciaEjecutivaUpdater'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { VicepresidenciaEjecutivaDependencies } from '../../di/employee/vicepresidencia-ejecutiva.di'

export class VicepresidenciaEjecutivaPatchController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const { id } = req.params
			const update: VicepresidenciaEjecutivaUpdater = container.resolve(
				VicepresidenciaEjecutivaDependencies.Updater
			)
			await update.run({ id, params })
			res.status(httpStatus[200].statusCode).send({
				message: 'Vicepresidencia ejecutiva actualizado exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
