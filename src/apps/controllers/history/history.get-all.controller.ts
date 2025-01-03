import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type HistoryFinderAll } from "../../../Contexts/History/application/HistoryFinderAll"

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { HistoryDependencies } from "../../di/history.di"

export class HistoryGetAllController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const getAll: HistoryFinderAll = container.resolve(HistoryDependencies.FinderAll)
            const data = await getAll.run()
            res.status(httpStatus.OK).json(data)
        } catch (error) {
            next(error)
        }
    }
}