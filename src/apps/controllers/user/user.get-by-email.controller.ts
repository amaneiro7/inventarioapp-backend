import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type JwtPayloadUser } from "../../../Contexts/Auth/domain/GenerateToken"
import { type UserFinderByEmail } from "../../../Contexts/User/user/application/UserFindByEmail"
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { UserDependencies } from "../../di/user.di"


export class UserGetByEmailController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const user = req.user as JwtPayloadUser
            const { email } = req.body
            const get: UserFinderByEmail = container.resolve(UserDependencies.FinderByEmail)
            const data = await get.run({ email, user })
            res.status(httpStatus.OK).json(data)
        } catch (error) {
            next(error)
        }
    }
}