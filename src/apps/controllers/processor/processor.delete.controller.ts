import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type ProcessorRemover } from "../../../Contexts/Features/Processor/Processor/application/ProcessorRemover"
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { ProcessorDependencies } from "../../di/processor/processor.di"


export class ProcessorDeleteController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params
            const remover: ProcessorRemover = container.resolve(ProcessorDependencies.Remover)
            await remover.run({ id })
            res.status(httpStatus.OK).send({ message: 'Empleado eliminado exitosamente' })
        } catch (error) {
            next(error)
        }
    }
}