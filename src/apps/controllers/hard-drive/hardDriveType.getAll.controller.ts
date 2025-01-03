import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type HardDriveTypeFinderAll } from "../../../Contexts/Features/HardDrive/HardDriveType/application/HardDriveTypeFinder"
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { HardDriveTypeDependencies } from "../../di/hard-drive-type.di"

export class HardDriveTypeGetAllController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const getAll: HardDriveTypeFinderAll = container.resolve(HardDriveTypeDependencies.FinderAll)
            const data = await getAll.run()
            res.status(httpStatus.OK).json(data)
        } catch (error) {
            next(error)
        }
    }
}