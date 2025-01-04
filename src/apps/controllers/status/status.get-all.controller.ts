import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type StatusFinderAll } from "../../../Contexts/Device/Status/application/StatusFinder"
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { StatusDependencies } from "../../di/status/status.di"

export class StatusGetAllController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const getAll: StatusFinderAll = container.resolve(StatusDependencies.FinderAll)
            const data = await getAll.run()
            res.status(httpStatus.OK).json(data)
        } catch (error) {
            next(error)
        }
    }
}