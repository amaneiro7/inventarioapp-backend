import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type JwtPayloadUser } from "../../../Contexts/Auth/domain/GenerateToken"
import { type DeviceUpdater } from "../../../Contexts/Device/Device/application/DeviceUpdater"
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { DeviceDependencies } from "../../di/device/device.di"


export class DevicePatchController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const user = req.user as JwtPayloadUser
            const params = req.body
            const { id } = req.params
            const update: DeviceUpdater = container.resolve(DeviceDependencies.Updater)
            await update.run({ id, params, user })
            res.status(httpStatus.CREATED).send({ message: 'Dispositivo actualizado exitosamente' })
        } catch (error) {
            next(error)
        }
    }
}