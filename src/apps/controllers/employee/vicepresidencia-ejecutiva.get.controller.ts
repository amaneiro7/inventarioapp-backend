import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type VicepresidenciaEjecutivaFinder } from '../../../Contexts/employee/VicepresidenciaEjecutiva/application/VicepresidenciaEjecutivaFinder'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { VicepresidenciaEjecutivaDependencies } from '../../di/employee/vicepresidencia-ejecutiva.di'

export class VicepresidenciaEjecutivaGetController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params
			const get: VicepresidenciaEjecutivaFinder = container.resolve(
				VicepresidenciaEjecutivaDependencies.Finder
			)
			const data = await get.run({ id })
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}
