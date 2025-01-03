import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type StateFinderAll } from "../../../Contexts/Location/State/application/StateFinderAll"

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { StateDependencies } from "../../di/state.di"

export class StateGetAllController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const getAll: StateFinderAll = container.resolve(StateDependencies.FinderAll)
            const data = await getAll.run()
            res.status(httpStatus.OK).json(data)
        } catch (error) {
            next(error)
        }
    }
}