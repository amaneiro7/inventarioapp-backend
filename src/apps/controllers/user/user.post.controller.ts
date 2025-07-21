import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type JwtPayloadUser } from '../../../Contexts/Auth/domain/GenerateToken'
import { type UserRegister } from '../../../Contexts/User/user/application/UserRegister'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { UserDependencies } from '../../di/user/user.di'

export class UserPostController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const user = req.user as JwtPayloadUser
			const payload = req.body
			const create: UserRegister = container.resolve(UserDependencies.Register)
			await create.run({ payload, user })
			res.status(httpStatus[201].statusCode).send({
				message: 'Usuario registrado exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
