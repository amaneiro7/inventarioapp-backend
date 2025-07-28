import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type InputTypeFinderAll } from '../../../Contexts/ModelSeries/InputType/application/InputTypeFinder'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { InputTypeDependencies } from '../../di/input-type/input-type.di'

/**
 * Controller for retrieving all InputType entries.
 */
export class InputTypeGetAllController implements Controller {
	/**
	 * Handles the request to get all InputType entries.
	 * @param {Request} req - The Express request object, containing criteria in `req.criteria`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: InputTypeFinderAll = container.resolve(InputTypeDependencies.FinderAll)
			const data = await getAll.run(req.criteria!)
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
