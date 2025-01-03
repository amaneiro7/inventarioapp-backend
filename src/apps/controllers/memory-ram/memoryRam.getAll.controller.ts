import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type MemoryRamTypeFinderAll } from "../../../Contexts/Features/MemoryRam/MemoryRamType/application/SearchAllMemoryRamType"
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { MemoryRamTypeDependencies } from "../../di/memory-ram-type.di"

export class MemoryRamTypeGetAllController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const getAll: MemoryRamTypeFinderAll = container.resolve(MemoryRamTypeDependencies.FinderAll)
            const data = await getAll.run()
            res.status(httpStatus.OK).json(data)
        } catch (error) {
            next(error)
        }
    }
}