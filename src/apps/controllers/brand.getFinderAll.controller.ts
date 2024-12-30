import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "./controller"
import { type SearchAllBrands } from "../../Contexts/Brand/application/BrandFinderAll"

import httpStatus from '../../Contexts/Shared/infrastructure/utils/http-status'
import container from "../dependency-injections"

export class BrandGetFinderController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const finderAll: SearchAllBrands = container.get('Brand.application.BrandFinderAll')
            const data = await finderAll.search()
            res.status(httpStatus.OK).json(data)
        } catch (error) {
            next(error)
        }
    }
}