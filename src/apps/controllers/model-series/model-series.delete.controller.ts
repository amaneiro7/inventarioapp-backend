import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { ModelSeriesRemover } from '../../../Contexts/ModelSeries/ModelSeries/application/ModelSeriesRemover'
import { ModelSeriesDependencies } from '../../di/model-series/model-series.di'

export class ModelSeriesDeleteController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params
			const remover: ModelSeriesRemover = container.resolve(
				ModelSeriesDependencies.Remover
			)
			await remover.run({ id })
			res.status(httpStatus.OK).send({
				message: 'Modelo eliminado exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
