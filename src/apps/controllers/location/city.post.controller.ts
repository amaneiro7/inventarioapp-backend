import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type CityCreator } from '../../../Contexts/Location/City/application/CityCreator'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { CityDependencies } from '../../di/location/city.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

interface CityRequest extends Request {
	body: {
		name: string
		stateId: string
	}
}

/**
 * Controller for creating a new City.
 */
export class CityPostController implements Controller {
	/**
	 * Handles the request to create a new City.
	 * @param {CityRequest} req - The Express request object, containing city parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: CityRequest, res: Response, next: NextFunction): Promise<void> {
		try {
			const { name, stateId } = req.body
			const create: CityCreator = container.resolve(CityDependencies.Creator)
			await create.run({ name, stateId })
			res.status(httpStatus[201].statusCode).json({
				message: SUCCESS_MESSAGES.CITY_CREATED
			})
		} catch (error) {
			next(error)
		}
	}
}
