import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type BrandFinderAll } from "../../../Contexts/Brand/application/BrandFinderAll"
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { BrandDependencies } from "../../di/brand.di"

export class BrandGetFinderAllController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const getAll: BrandFinderAll = container.resolve(BrandDependencies.FinderAll)
            const data = await getAll.run()
            res.status(httpStatus.OK).json(data)
        } catch (error) {
            next(error)
        }
    }
}