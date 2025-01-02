import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type JwtPayloadUser } from "../../../Contexts/Auth/domain/GenerateToken"
import { type DeviceCreator } from "../../../Contexts/Device/Device/application/DeviceCreator"
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { DeviceDependencies } from "../../di/device.di"

export class DevicePostController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const user = req.user as JwtPayloadUser
            const params = req.body
            const create: DeviceCreator = container.resolve(DeviceDependencies.Creator)
            await create.run({ params, user })
            res.status(httpStatus.CREATED).send({ message: 'Dispositivo creado exitosamente' })
        } catch (error) {
            next(error)
        }
    }
}