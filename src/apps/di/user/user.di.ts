import { asClass, type AwilixContainer } from 'awilix'
import { UserFinderAll } from '../../../Contexts/User/user/application/UserFinderAll'
import { UserRegister } from '../../../Contexts/User/user/application/UserRegister'
import { UserRemover } from '../../../Contexts/User/user/application/UserRemover'
import { UserResetPassword } from '../../../Contexts/User/user/application/UserResetPassword'
import { UserFinderByEmail } from '../../../Contexts/User/user/application/UserFindByEmail'
import { SequelizeUserRepository } from '../../../Contexts/User/user/infrastructure/persistance/Sequelize/SequelizeUserRepository'
import { UserChangePassword } from '../../../Contexts/User/user/application/UserChangePassword'
import { UserGetAllController } from '../../controllers/user/user.get-all.controller'
import { UserDeleteController } from '../../controllers/user/user.delete.controller'
import { UserChangePasswordController } from '../../controllers/user/user.change-password.controller'
import { UserResetPasswordController } from '../../controllers/user/user.reset-password.controller'

export enum UserDependencies {
	Repository = 'userRepository',
	FinderAll = 'userFinderAll',
	FinderByEmail = 'userFinderByEmail',
	Register = 'userRegister',
	Remover = 'userRemover',
	ChangePassword = 'userChangePassword',
	ResetPassword = 'userResetPassword',

	GetAllController = 'userGetAllController',
	DeleteController = 'userDeleteController',
	ChangePasswordController = 'userChangePasswordController',
	ResetPasswordController = 'userResetPasswordController'
}
export const register = (container: AwilixContainer) => {
	container.register({
		userRepository: asClass(SequelizeUserRepository).singleton(),

		userFinderAll: asClass(UserFinderAll),
		userFinderByEmail: asClass(UserFinderByEmail),
		userRegister: asClass(UserRegister),
		userResetPassword: asClass(UserResetPassword),
		userChangePassword: asClass(UserChangePassword),
		userRemover: asClass(UserRemover),

		userGetAllController: asClass(UserGetAllController),
		userDeleteController: asClass(UserDeleteController),
		userChangePasswordController: asClass(UserChangePasswordController),
		userResetPasswordController: asClass(UserResetPasswordController)
	})
}
