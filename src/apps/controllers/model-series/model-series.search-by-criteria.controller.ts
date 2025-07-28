import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type ModelSeriesSearchByCriteria } from '../../../Contexts/ModelSeries/ModelSeries/application/ModelByCriteriaSearcher'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { ModelSeriesDependencies } from '../../di/model-series/model-series.di'

/**
 * Controller for searching ModelSeries by criteria.
 */
export class ModelSeriesSearchByCriteriaController implements Controller {
	/**
	 * Handles the request to search model series by criteria.
	 * @param {Request} req - The Express request object, containing criteria in `req.criteria`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getByCriteria: ModelSeriesSearchByCriteria = container.resolve(
				ModelSeriesDependencies.SearchByCriteria
			)
			const data = await getByCriteria.run(req.criteria!)
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
