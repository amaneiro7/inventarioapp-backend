import { type NextFunction, type Request, type Response } from 'express'
import { type JwtPayloadUser } from '../../../Contexts/Auth/domain/GenerateToken'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { Controller } from '../controller'
import { ApiError } from '../../../Contexts/Shared/domain/errors/ApiError'
import { ERROR_MESSAGES } from '../../constants/messages'
import { container } from '../../di/container'
import { GetUserPermissions } from '../../../Contexts/AccessControl/AccessPolicy/application/GetUserPermissions'
import { AccessPolicyDependencies } from '../../di/access-control/access-policy.di'

/**
 * Controller for retrieving user permissions.
 */
export class AuthMePermissionsController implements Controller {
	/**
	 * Handles the request to get user permissions.
	 * It expects a `JwtPayloadUser` in `req.user` to identify the user.
	 * @param {Request} req - The Express request object.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const jwtToken = req?.user as JwtPayloadUser

			if (!jwtToken) throw new ApiError(httpStatus[401].statusCode, ERROR_MESSAGES.TOKEN_NOT_PROVIDED)

			const GetUserPermissions: GetUserPermissions = container.resolve(
				AccessPolicyDependencies.GetUserPermissions
			)
			const permissions = await GetUserPermissions.run({
				roleId: Number(jwtToken.roleId),
				cargoId: jwtToken.cargoId,
				departamentoId: jwtToken.departamentoId,
				directivaId: jwtToken.directivaId,
				vicepresidenciaId: jwtToken.vicepresidenciaId,
				vicepresidenciaEjecutivaId: jwtToken.vicepresidenciaEjecutivaId
			})

			res.status(httpStatus[200].statusCode).send({
				permissions
			})
		} catch (error) {
			next(error)
		}
	}
}
