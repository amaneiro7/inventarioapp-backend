import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type ModelSeriesCreator } from '../../../Contexts/ModelSeries/ModelSeries/application/ModelSeriesCreator'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { ModelSeriesDependencies } from '../../di/model-series/model-series.di'

export class ModelSeriesPostController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const create: ModelSeriesCreator = container.resolve(ModelSeriesDependencies.Creator)
			await create.run(params)
			res.status(httpStatus[201].statusCode).send({
				message: 'Modelo creado exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
