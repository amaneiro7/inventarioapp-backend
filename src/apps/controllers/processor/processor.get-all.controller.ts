import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type ProcessorsFinderAll } from "../../../Contexts/Features/Processor/Processor/application/ProcessorFinderAll"
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { ProcessorDependencies } from "../../di/processor.di"



export class ProcessorGetAllController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const getAll: ProcessorsFinderAll = container.resolve(ProcessorDependencies.FinderAll)
            const data = await getAll.run()
            res.status(httpStatus.OK).json(data)
        } catch (error) {
            next(error)
        }
    }
}