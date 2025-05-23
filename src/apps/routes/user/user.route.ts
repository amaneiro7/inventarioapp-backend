import { type Router } from 'express'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { UserDependencies } from '../../di/user/user.di'
import { type UserGetController } from '../../controllers/user/user.get.controller'
import { type UserGetAllController } from '../../controllers/user/user.get-all.controller'
import { type UserPostController } from '../../controllers/user/user.post.controller'
import { type UserPatchController } from '../../controllers/user/user.patch.controller'
import { type UserDeleteController } from '../../controllers/user/user.delete.controller'
import { type UserGetByEmailController } from '../../controllers/user/user.get-by-email.controller'
import { type UserChangePasswordController } from '../../controllers/user/user.change-password.controller'
import { type UserResetPasswordController } from '../../controllers/user/user.reset-password.controller'

export const register = async (router: Router) => {
	const getController: UserGetController = container.resolve(UserDependencies.GetController)
	const getAllController: UserGetAllController = container.resolve(UserDependencies.GetAllController)
	const postController: UserPostController = container.resolve(UserDependencies.PostController)
	const patchController: UserPatchController = container.resolve(UserDependencies.PatchController)
	const deleteController: UserDeleteController = container.resolve(UserDependencies.DeleteController)
	const getByEmailController: UserGetByEmailController = container.resolve(UserDependencies.GetByEmailController)
	const changePaswwordController: UserChangePasswordController = container.resolve(
		UserDependencies.ChangePasswordController
	)
	const resetPasswordController: UserResetPasswordController = container.resolve(
		UserDependencies.ResetPasswordController
	)

	// get
	router.get('/users/', authenticate, getAllController.run.bind(getAllController))

	router.get('/users/by-email', authenticate, getByEmailController.run.bind(getByEmailController))

	router.get('/users/:id', authenticate, getController.run.bind(getController))

	//post

	router.post('/users/register', authenticate, postController.run.bind(postController))

	// patch
	router.patch('/users/update', authenticate, patchController.run.bind(patchController))
	router.patch('/users/change-password', authenticate, changePaswwordController.run.bind(changePaswwordController))
	router.patch('/users/reset-password', authenticate, resetPasswordController.run.bind(resetPasswordController))

	// delete
	router.delete('users/', authenticate, deleteController.run.bind(deleteController))
}
