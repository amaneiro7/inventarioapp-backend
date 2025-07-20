import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type ProcessorsFinder } from '../../../Contexts/Features/Processor/Processor/application/ProcessorFinder'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { ProcessorDependencies } from '../../di/processor/processor.di'

export class ProcessorGetController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params
			const get: ProcessorsFinder = container.resolve(ProcessorDependencies.Finder)
			const data = await get.run({ id })
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
