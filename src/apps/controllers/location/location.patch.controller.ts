import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type LocationUpdater } from '../../../Contexts/Location/Location/application/LocationUpdater'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { LocationDependencies } from '../../di/location/location.di'

export class LocationPatchController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const { id } = req.params
			const update: LocationUpdater = container.resolve(LocationDependencies.Updater)
			await update.run({ id, params })
			res.status(httpStatus[204].statusCode).send({
				message: 'Ubicación actualizada exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
