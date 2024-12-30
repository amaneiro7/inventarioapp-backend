import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "./controller"
import { type BrandsFinder } from "../../Contexts/Brand/application/BrandFinder"

import httpStatus from '../../Contexts/Shared/infrastructure/utils/http-status'
import container from "../dependency-injections"

export class BrandGetFinderController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params
            const finder: BrandsFinder = container.get('Brand.application.BrandFinder')
            const data = await finder.searchById({ id })
            res.status(httpStatus.OK).json(data)
        } catch (error) {
            next(error)
        }
    }
}