import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type BrandFinderAll } from '../../../Contexts/Brand/application/BrandFinderAll'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { BrandDependencies } from '../../di/brand/brand.di'
import { CriteriaFromUrlConverter } from '../../../Contexts/Shared/infrastructure/criteria/CriteriaFromUrlConverter'

export class BrandGetFinderAllController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const convert = new CriteriaFromUrlConverter()
			const query = convert.toCriteria(req)
			const getAll: BrandFinderAll = container.resolve(BrandDependencies.FinderAll)
			const data = await getAll.run(query)
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
