import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type ModelSeriesFinder } from '../../../Contexts/ModelSeries/ModelSeries/application/ModelSeriesFinder'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { ModelSeriesDependencies } from '../../di/model-series/model-series.di'

export class ModelSeriesGetController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params
			const get: ModelSeriesFinder = container.resolve(ModelSeriesDependencies.Finder)
			const data = await get.run({ id })
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}
