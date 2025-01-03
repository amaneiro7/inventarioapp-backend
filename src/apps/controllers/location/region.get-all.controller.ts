import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type RegionFinderAll } from "../../../Contexts/Location/Region/application/RegionFinderAll"

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { RegionDependencies } from "../../di/region.di"

export class RegionGetAllController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const getAll: RegionFinderAll = container.resolve(RegionDependencies.FinderAll)
            const data = await getAll.run()
            res.status(httpStatus.OK).json(data)
        } catch (error) {
            next(error)
        }
    }
}