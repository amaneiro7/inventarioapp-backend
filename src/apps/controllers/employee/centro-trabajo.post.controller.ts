import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type CentroTrabajoCreator } from '../../../Contexts/employee/CentroTrabajo/application/CentroTrabajoCreator'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { CentroTrabajoDependencies } from '../../di/employee/centro-trabajo.di'

export class CentroTrabajoPostController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const create: CentroTrabajoCreator = container.resolve(CentroTrabajoDependencies.Creator)
			await create.run({ params })
			res.status(httpStatus[201].statusCode).send({
				message: 'Centro de trabajo creado exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
