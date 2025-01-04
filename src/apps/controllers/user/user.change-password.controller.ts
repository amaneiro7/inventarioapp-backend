import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type JwtPayloadUser } from "../../../Contexts/Auth/domain/GenerateToken"
import { type UserChangePassword } from "../../../Contexts/User/user/application/UserChangePassword"

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { UserDependencies } from "../../di/user/user.di"

export class UserChangePasswordController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const user = req.user as JwtPayloadUser
            const { password, newPassword, reTypePassword } = req.body
            const changePaswword: UserChangePassword = container.resolve(UserDependencies.ChangePassword)
            await changePaswword.run({
                payload: user,
                password,
                newPassword,
                reTypePassword
            })
            res.status(httpStatus.CREATED).send({ message: 'Contraseña actualizada exitosamente' })
        } catch (error) {
            next(error)
        }
    }
}