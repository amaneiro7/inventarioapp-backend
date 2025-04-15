import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type DirectivaCreator } from '../../../Contexts/employee/Directiva/application/DirectivaCreator'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { DirectivaDependencies } from '../../di/employee/directiva.di'

export class DirectivaPostController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const create: DirectivaCreator = container.resolve(DirectivaDependencies.Creator)
			await create.run({ params })
			res.status(httpStatus.CREATED).send({
				message: 'Directiva creado exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
