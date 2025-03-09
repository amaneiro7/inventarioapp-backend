import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type LocationCreator } from '../../../Contexts/Location/Location/application/LocationCreator'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { LocationDependencies } from '../../di/location/location.di'

export class LocationPostController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const create: LocationCreator = container.resolve(LocationDependencies.Creator)
			await create.run(params)
			res.status(httpStatus.CREATED).send({
				message: 'Ubicación agregado exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
