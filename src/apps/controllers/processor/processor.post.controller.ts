import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type ProcessorCreator } from "../../../Contexts/Features/Processor/Processor/application/ProcessorCreator"

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { ProcessorDependencies } from "../../di/processor/processor.di"

export class ProcessorPostController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const params = req.body
            const create: ProcessorCreator = container.resolve(ProcessorDependencies.Creator)
            await create.run(params)
            res.status(httpStatus.CREATED).send({ message: 'Empleado creado exitosamente' })
        } catch (error) {
            next(error)
        }
    }
}