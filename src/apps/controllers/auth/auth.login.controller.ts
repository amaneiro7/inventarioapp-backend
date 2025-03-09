import { type NextFunction, type Request, type Response } from 'express'
import { type UserPrimitives } from '../../../Contexts/User/user/domain/User'
import { type RolePrimitives } from '../../../Contexts/User/Role/domain/Role'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { Controller } from '../controller'
import { AuthUseCase } from '../../../Contexts/Auth/application/AuthUseCase'

type ReqUser = UserPrimitives & {
	role: RolePrimitives
}

export class AuthLoginController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const user = req.user as ReqUser
			if (!user) throw new Error('User not found')

			const { infoUser, refreshToken } = await AuthUseCase.authenticaUser(user)

			res.status(httpStatus.OK)
				.cookie('refreshToken', refreshToken, {
					httpOnly: true,
					// secure: process.env.NODE_ENV === 'production',
					sameSite: 'strict'
				})
				.json({
					...infoUser,
					message: 'Sesion iniciada exitosamente'
				})
		} catch (error) {
			next(error)
		}
	}
}
