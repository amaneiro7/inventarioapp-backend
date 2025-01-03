import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type JwtPayloadUser } from "../../../Contexts/Auth/domain/GenerateToken"
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { UserUpdater } from "../../../Contexts/User/user/application/UserUpdater"
import { UserDependencies } from "../../di/user.di"

export class UserPatchController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const user = req.user as JwtPayloadUser
            const payload = req.body
            const { id } = req.params
            const update: UserUpdater = container.resolve(UserDependencies.Updater)
            await update.run({ id, payload, user })
            res.status(httpStatus.CREATED).send({ message: 'Usuario actualizado exitosamente' })
        } catch (error) {
            next(error)
        }
    }
}