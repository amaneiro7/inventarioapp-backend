import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type ModelSeriesUpdater } from '../../../Contexts/ModelSeries/ModelSeries/application/ModelSeriesUpdater'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { ModelSeriesDependencies } from '../../di/model-series/model-series.di'

export class ModelSeriesPatchController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const { id } = req.params
			const update: ModelSeriesUpdater = container.resolve(ModelSeriesDependencies.Updater)
			await update.run({ id, params })
			res.status(httpStatus.CREATED).send({
				message: 'Modelo actualizado exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
