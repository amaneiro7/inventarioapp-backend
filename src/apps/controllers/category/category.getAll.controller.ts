import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type CategoriesFinderAll } from "../../../Contexts/Category/Category/application/CategoryFinderAll"
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { CategoryDependencies } from "../../di/category.di"

export class CategoryGetAllController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const getAll: CategoriesFinderAll = container.resolve(CategoryDependencies.FinderAll)
            const data = await getAll.run()
            res.status(httpStatus.OK).json(data)
        } catch (error) {
            next(error)
        }
    }
}