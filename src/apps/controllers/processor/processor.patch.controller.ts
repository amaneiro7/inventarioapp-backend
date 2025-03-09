import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type ProcessorUpdater } from '../../../Contexts/Features/Processor/Processor/application/ProcessorUpdater'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { ProcessorDependencies } from '../../di/processor/processor.di'

export class ProcessorPatchController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const { id } = req.params
			const update: ProcessorUpdater = container.resolve(ProcessorDependencies.Updater)
			await update.run({ id, params })
			res.status(httpStatus.CREATED).send({
				message: 'Procesador actualizado exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
