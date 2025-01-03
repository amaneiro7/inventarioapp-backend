import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type SiteFinder } from "../../../Contexts/Location/Site/application/SiteFinder"
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { SiteDependencies } from "../../di/site.di"

export class SiteGetController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params
            const get: SiteFinder = container.resolve(SiteDependencies.Finder)
            const data = await get.run({ id })
            res.status(httpStatus.OK).json(data)
        } catch (error) {
            next(error)
        }
    }
}