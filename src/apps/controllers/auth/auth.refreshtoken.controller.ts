import { type NextFunction, type Request, type Response } from 'express'
import { type Controller } from '../controller'
import { type AuthRefreshTokenUseCase } from '../../../Contexts/Auth/application/AuthRefhreshTokenUseCase'
import { type JwtPayloadUser } from '../../../Contexts/Auth/domain/GenerateToken'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { AuthDependencies } from '../../di/auth/auth.di'

export class AuthRefreshTokenController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const jwtToken = req?.user as JwtPayloadUser
			if (!jwtToken) throw new Error('Token not provided')

			const refreshToken: AuthRefreshTokenUseCase = container.resolve(
				AuthDependencies.RefreshTokenUseCase
			)
			const { infoUser } = await refreshToken.run(jwtToken)

			res.status(httpStatus.OK).send({
				...infoUser
			})
		} catch (error) {
			next(error)
		}
	}
}
