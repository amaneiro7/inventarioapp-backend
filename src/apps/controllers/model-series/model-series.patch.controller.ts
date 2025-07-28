import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type ModelSeriesUpdater } from '../../../Contexts/ModelSeries/ModelSeries/application/ModelSeriesUpdater'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { ModelSeriesDependencies } from '../../di/model-series/model-series.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for updating an existing ModelSeries.
 */
export class ModelSeriesPatchController implements Controller {
	/**
	 * Handles the request to update a ModelSeries.
	 * @param {Request} req - The Express request object, containing the model series ID in `req.params` and update parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const { id } = req.params
			const update: ModelSeriesUpdater = container.resolve(ModelSeriesDependencies.Updater)
			await update.run({ id, params })
			res.status(httpStatus[200].statusCode).send({
				message: SUCCESS_MESSAGES.MODEL_UPDATED
			})
		} catch (error) {
			next(error)
		}
	}
}
