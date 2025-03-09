import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type ProcessorSocketFinderAll } from '../../../Contexts/Features/Processor/ProcessorSocket/application/ProcessorSocketFinderAll'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { ProcessorSocketDependencies } from '../../di/processor/processor-socket.di'
import { CriteriaFromUrlConverter } from '../../../Contexts/Shared/infrastructure/criteria/CriteriaFromUrlConverter'

export class ProcessorSocketGetAllController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: ProcessorSocketFinderAll = container.resolve(ProcessorSocketDependencies.FinderAll)
			const convert = new CriteriaFromUrlConverter()
			const query = convert.toCriteria(req)

			const data = await getAll.run(query)
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}
