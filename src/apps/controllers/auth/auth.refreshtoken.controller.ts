import { type NextFunction, type Request, type Response } from 'express'
import { type Controller } from '../controller'
import { type AuthRefreshTokenUseCase } from '../../../Contexts/Auth/application/AuthRefhreshTokenUseCase'
import { type JwtPayloadUser } from '../../../Contexts/Auth/domain/GenerateToken'
import { type GetUserPermissions } from '../../../Contexts/AccessControl/AccessPolicy/application/GetUserPermissions'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { AuthDependencies } from '../../di/auth/auth.di'
import { ApiError } from '../../../Contexts/Shared/domain/errors/ApiError'
import { ERROR_MESSAGES } from '../../constants/messages'
import { AccessPolicyDependencies } from '../../di/access-control/access-policy.di'

/**
 * Controller for refreshing authentication tokens.
 */
export class AuthRefreshTokenController implements Controller {
	/**
	 * Handles the token refresh request.
	 * It expects a `JwtPayloadUser` in `req.user` to refresh the token.
	 * @param {Request} req - The Express request object.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const jwtToken = req?.user as JwtPayloadUser
			if (!jwtToken) throw new ApiError(httpStatus[401].statusCode, ERROR_MESSAGES.TOKEN_NOT_PROVIDED)

			const refreshToken: AuthRefreshTokenUseCase = container.resolve(AuthDependencies.RefreshTokenUseCase)
			const { user, accessToken } = await refreshToken.run(jwtToken)
			const getUserPermission: GetUserPermissions = container.resolve(AccessPolicyDependencies.GetUserPermissions)
			const permissions = await getUserPermission.run({
				cargoId: user.employee.cargoId,
				departamentoId: user.employee.departamentoId,
				roleId: user.roleId
			})

			res.status(httpStatus[200].statusCode).send({
				user,
				permissions,
				accessToken
			})
		} catch (error) {
			next(error)
		}
	}
}
