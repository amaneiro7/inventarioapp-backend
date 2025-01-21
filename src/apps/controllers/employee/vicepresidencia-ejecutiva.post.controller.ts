import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type VicepresidenciaEjecutivaCreator } from '../../../Contexts/employee/VicepresidenciaEjecutiva/application/VicepresidenciaEjecutivaCreator'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { VicepresidenciaEjecutivaDependencies } from '../../di/employee/vicepresidencia-ejecutiva.di'

export class VicepresidenciaEjecutivaPostController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const create: VicepresidenciaEjecutivaCreator = container.resolve(
				VicepresidenciaEjecutivaDependencies.Creator
			)
			await create.run(params)
			res.status(httpStatus.CREATED).send({
				message: 'Empleado creado exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
