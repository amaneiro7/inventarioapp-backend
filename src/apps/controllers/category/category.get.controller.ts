import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type CategoriesFinder } from "../../../Contexts/Category/Category/application/CategoryFinder"
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { CategoryDependencies } from "../../di/category/category.di"


export class CategoryGetController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params
            const get: CategoriesFinder = container.resolve(CategoryDependencies.Finder)
            const data = await get.run({ id })
            res.status(httpStatus.OK).json(data)
        } catch (error) {
            next(error)
        }
    }
}