import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type JwtPayloadUser } from "../../../Contexts/Auth/domain/GenerateToken"
import { type UserResetPassword } from "../../../Contexts/User/user/application/UserResetPassword"

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { UserDependencies } from "../../di/user/user.di"

export class UserResetPasswordController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const user = req.user as JwtPayloadUser
            const { id } = req.body
            const reset: UserResetPassword = container.resolve(UserDependencies.ResetPassword)
            await reset.run({
                user, id
            })
            res.status(httpStatus.CREATED).send({ message: 'Se ha restablecido la contraseña con éxito' })
        } catch (error) {
            next(error)
        }
    }
}