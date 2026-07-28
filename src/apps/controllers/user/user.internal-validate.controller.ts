import type { Request, Response, NextFunction } from 'express'
import { type Controller } from '../controller'
import { type UserFinder } from '../../../Contexts/User/user/application/UserFinder'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { UserDependencies } from '../../di/user/user.di'
import { UserStatusEnum } from '../../../Contexts/User/user/domain/valueObject/UserStatus'
import { ForbiddenError } from '../../../Contexts/Shared/domain/errors/ForbiddenError'

export class UserInternalValidateController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const id = String(req.params.id)
			console.log('UserInternalValidateController: Validating user with ID:', id) // Debugging log
			const get: UserFinder = container.resolve(UserDependencies.Finder)
			const data = await get.run({ id, skipAdminCheck: true })
			const userStatus = data?.status
			if (userStatus !== UserStatusEnum.ACTIVE) {
				const message = `El usuario con ID ${id} no está activo. Estado actual: ${userStatus}.`
				return next(new ForbiddenError(message))
			}

			if (!data.employee.isStillWorking) {
				const message = `El usuario con ID ${id} no está activo porque el empleado asociado ya no trabaja en la empresa.`
				return next(new ForbiddenError(message))
			}
			res.status(httpStatus[200].statusCode).json({
				id: data.id,
				userName: data.userName,
				name: data.employee.name,
				lastName: data.employee.lastName,
				email: data.employee.email,
				cargo: data.employee.cargo,
				unidad: data.employee.unidad
			})
		} catch (error) {
			next(error)
		}
	}
}
