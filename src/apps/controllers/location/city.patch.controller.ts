import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type CityUpdater } from '../../../Contexts/Location/City/application/CityUpdater'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { CityDependencies } from '../../di/location/city.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

interface CityRequest extends Request {
	params: {
		id: string
	}
	body: {
		name: string
		stateId: string
	}
}

/**
 * Controller for updating an existing City.
 */
export class CityPatchController implements Controller {
	/**
	 * Handles the request to update a City.
	 * @param {CityRequest} req - The Express request object, containing the city ID in `req.params` and update parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: CityRequest, res: Response, next: NextFunction): Promise<void> {
		try {
			const { name, stateId } = req.body
			const { id } = req.params
			const update: CityUpdater = container.resolve(CityDependencies.Updater)
			await update.run({ id, params: { name, stateId } })
			res.status(httpStatus[200].statusCode).json({
				message: SUCCESS_MESSAGES.CITY_UPDATED
			})
		} catch (error) {
			next(error)
		}
	}
}
