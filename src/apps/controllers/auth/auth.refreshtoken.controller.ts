import { type NextFunction, type Request, type Response } from 'express'
import { type Controller } from '../controller'
import { type AuthRefreshTokenUseCase } from '../../../Contexts/Auth/application/AuthRefhreshTokenUseCase'
import { type JwtPayloadUser } from '../../../Contexts/Auth/domain/GenerateToken'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { AuthDependencies } from '../../di/auth/auth.di'
import { ApiError } from '../../../Contexts/Shared/domain/errors/ApiError'

export class AuthRefreshTokenController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const jwtToken = req?.user as JwtPayloadUser
			if (!jwtToken) throw new ApiError(httpStatus[401].statusCode, 'Token not provided')

			const refreshToken: AuthRefreshTokenUseCase = container.resolve(AuthDependencies.RefreshTokenUseCase)
			const { user, accessToken } = await refreshToken.run(jwtToken)

			res.status(httpStatus[200].statusCode).send({
				user,
				accessToken
			})
		} catch (error) {
			next(error)
		}
	}
}
