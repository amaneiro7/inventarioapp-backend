import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type MainCategoriesFinder } from "../../../Contexts/Category/MainCategory/application/MainCategoryFinder"
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { MainCategoryDependencies } from "../../di/main-category.di"


export class MainCategoryGetController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params
            const mainCategoryFinder: MainCategoriesFinder = container.resolve(MainCategoryDependencies.Finder)
            const data = await mainCategoryFinder.run({ id })
            res.status(httpStatus.OK).json(data)
        } catch (error) {
            next(error)
        }
    }
}