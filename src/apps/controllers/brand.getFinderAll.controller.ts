import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "./controller"
import { type BrandFinderAll } from "../../Contexts/Brand/application/BrandFinderAll"
import httpStatus from '../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../di/container"

export class BrandGetFinderAllController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const brandFinderAll: BrandFinderAll = container.resolve('brandFinderAll')
            const data = await brandFinderAll.run()
            res.status(httpStatus.OK).json(data)
        } catch (error) {
            next(error)
        }
    }
}