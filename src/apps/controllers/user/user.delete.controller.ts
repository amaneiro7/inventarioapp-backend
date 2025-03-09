import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type UserRemover } from '../../../Contexts/User/user/application/UserRemover'
import { type JwtPayloadUser } from '../../../Contexts/Auth/domain/GenerateToken'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { UserDependencies } from '../../di/user/user.di'

export class UserDeleteController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params
			const user = req.user as JwtPayloadUser
			const remover: UserRemover = container.resolve(UserDependencies.Remover)
			await remover.run({ id, user })
			res.status(httpStatus.OK).send({
				message: 'Usuario eliminado exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}
