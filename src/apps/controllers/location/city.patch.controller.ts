import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type CityUpdater } from '../../../Contexts/Location/City/application/CityUpdater'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { CityDependencies } from '../../di/location/city.di'

interface CityRequest extends Request {
	params: {
		id: string
	}
	body: {
		name: string
		stateId: string
	}
}

export class CityPatchController implements Controller {
	async run(req: CityRequest, res: Response, next: NextFunction): Promise<void> {
		try {
			const { name, stateId } = req.body
			const { id } = req.params
			const update: CityUpdater = container.resolve(CityDependencies.Updater)
			await update.run({ id, params: { name, stateId } })
			res.status(httpStatus[200].statusCode).json({
				message: 'Ciudad actualizada exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
