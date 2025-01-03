import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type BrandFinder } from "../../../Contexts/Brand/application/BrandFinder"
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { BrandDependencies } from "../../di/brand.di"

export class BrandGetFinderController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params
            const get: BrandFinder = container.resolve(BrandDependencies.Finder)
            const data = await get.run({ id })
            res.status(httpStatus.OK).json(data)
        } catch (error) {
            next(error)
        }
    }
}