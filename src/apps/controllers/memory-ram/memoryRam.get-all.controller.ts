import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type MemoryRamTypeFinderAll } from '../../../Contexts/Features/MemoryRam/MemoryRamType/application/SearchAllMemoryRamType'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { MemoryRamTypeDependencies } from '../../di/memory-ram/memory-ram-type.di'
import { CriteriaFromUrlConverter } from '../../../Contexts/Shared/infrastructure/criteria/CriteriaFromUrlConverter'

export class MemoryRamTypeGetAllController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: MemoryRamTypeFinderAll = container.resolve(MemoryRamTypeDependencies.FinderAll)
			const convert = new CriteriaFromUrlConverter()
			const query = convert.toCriteria(req)

			const data = await getAll.run(query)
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}
