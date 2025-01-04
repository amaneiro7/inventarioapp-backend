import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type SiteFinderAll } from "../../../Contexts/Location/Site/application/SiteFinderAll"

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { SiteDependencies } from "../../di/location/site.di"

export class SiteGetAllController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const getAll: SiteFinderAll = container.resolve(SiteDependencies.FinderAll)
            const data = await getAll.run()
            res.status(httpStatus.OK).json(data)
        } catch (error) {
            next(error)
        }
    }
}