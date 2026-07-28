import type { Router } from 'express'
import type { UserInternalValidateController } from '../../controllers/user/user.internal-validate.controller'
import { container } from '../../di/container'
import { UserDependencies } from '../../di/user/user.di'
import { internalAuthMiddleware } from '../../Middleware/internalAuthMiddleware'

export const register = async (router: Router) => {
	const userInternalValidateController: UserInternalValidateController = container.resolve(
		UserDependencies.UserInternalValidateController
	)

	router.get('/internal/users/:id/validate', internalAuthMiddleware, (req, res, next) =>
		userInternalValidateController.run(req, res, next)
	)
}
