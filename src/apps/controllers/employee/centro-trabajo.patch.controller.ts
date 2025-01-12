import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type CentroTrabajoUpdater } from "../../../Contexts/employee/CentroTrabajo/application/CentroTrabajoUpdater"
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { CentroTrabajoDependencies } from "../../di/employee/centro-trabajo.di"


export class CentroTrabajoPatchController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const params = req.body
            const { id } = req.params
            const update: CentroTrabajoUpdater = container.resolve(CentroTrabajoDependencies.Updater)
            await update.run({ id, params })
            res.status(httpStatus.CREATED).send({ message: 'Empleado actualizado exitosamente' })
        } catch (error) {
            next(error)
        }
    }
}