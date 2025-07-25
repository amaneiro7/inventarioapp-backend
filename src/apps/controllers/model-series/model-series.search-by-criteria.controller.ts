import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type ModelSeriesSearchByCriteria } from '../../../Contexts/ModelSeries/ModelSeries/application/ModelByCriteriaSearcher'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { ModelSeriesDependencies } from '../../di/model-series/model-series.di'
import { CriteriaFromUrlConverter } from '../../../Contexts/Shared/infrastructure/criteria/CriteriaFromUrlConverter'

export class ModelSeriesSearchByCriteriaController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getByCriteria: ModelSeriesSearchByCriteria = container.resolve(
				ModelSeriesDependencies.SearchByCriteria
			)
			const convert = new CriteriaFromUrlConverter()
			const query = convert.toCriteria(req)

			const data = await getByCriteria.run(query)
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
