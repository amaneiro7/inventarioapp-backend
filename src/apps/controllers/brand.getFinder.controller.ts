import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "./controller"
import { type BrandFinder } from "../../Contexts/Brand/application/BrandFinder"
import httpStatus from '../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../di/container"

export class BrandGetFinderController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params
            const brandFinder: BrandFinder = container.resolve('brandFinder')
            const data = await brandFinder.run({ id })
            res.status(httpStatus.OK).json(data)
        } catch (error) {
            next(error)
        }
    }
}