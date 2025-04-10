import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type VicepresidenciaCreator } from '../../../Contexts/employee/Vicepresidencia/application/VicepresidenciaCreator'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { VicepresidenciaDependencies } from '../../di/employee/vicepresidencia.di'

export class VicepresidenciaPostController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const create: VicepresidenciaCreator = container.resolve(VicepresidenciaDependencies.Creator)
			await create.run(params)
			res.status(httpStatus.CREATED).send({
				message: 'Vicepresidencia creado exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
