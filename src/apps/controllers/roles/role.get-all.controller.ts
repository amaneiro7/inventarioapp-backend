import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type RoleFinderAll } from "../../../Contexts/User/Role/application/RoleFinderAll"

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { RoleDependencies } from "../../di/roles.di"




export class RoleGetAllController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const getAll: RoleFinderAll = container.resolve(RoleDependencies.FinderAll)
            const data = await getAll.run()
            res.status(httpStatus.OK).json(data)
        } catch (error) {
            next(error)
        }
    }
}