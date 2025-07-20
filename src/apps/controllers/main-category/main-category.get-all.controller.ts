import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type MainCategoriesFinderAll } from '../../../Contexts/Category/MainCategory/application/MainCategoryFinderAll'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { MainCategoryDependencies } from '../../di/main-category/main-category.di'
import { CriteriaFromUrlConverter } from '../../../Contexts/Shared/infrastructure/criteria/CriteriaFromUrlConverter'

export class MainCategoryGetAllController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: MainCategoriesFinderAll = container.resolve(MainCategoryDependencies.FinderAll)
			const convert = new CriteriaFromUrlConverter()
			const query = convert.toCriteria(req)

			const data = await getAll.run(query)
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
