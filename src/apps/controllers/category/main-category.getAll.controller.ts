import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type MainCategoriesFinderAll } from "../../../Contexts/Category/MainCategory/application/MainCategoryFinderAll"
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { MainCategoryDependencies } from "../../di/main-category.di"

export class MainCategoryGetAllController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const mainCategoryFinderAll: MainCategoriesFinderAll = container.resolve(MainCategoryDependencies.FinderAll)
            const data = await mainCategoryFinderAll.run()
            res.status(httpStatus.OK).json(data)
        } catch (error) {
            next(error)
        }
    }
}