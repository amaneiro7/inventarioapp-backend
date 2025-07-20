import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type UserFinder } from '../../../Contexts/User/user/application/UserFinder'
import { type JwtPayloadUser } from '../../../Contexts/Auth/domain/GenerateToken'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { UserDependencies } from '../../di/user/user.di'

export class UserGetController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const user = req.user as JwtPayloadUser
			const { id } = req.params
			const get: UserFinder = container.resolve(UserDependencies.Finder)
			const data = await get.run({ id, user })
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}
