import { asClass, type AwilixContainer } from 'awilix'
//Repositories
import { SequelizeUserRepository } from '../../../Contexts/User/user/infrastructure/persistance/Sequelize/SequelizeUserRepository'
//Applications
import { UserFinder } from '../../../Contexts/User/user/application/UserFinder'
import { UserFinderAll } from '../../../Contexts/User/user/application/UserFinderAll'
import { UserDisabledAccount } from '../../../Contexts/User/user/application/UserDisabledAccount'
import { UserResetPassword } from '../../../Contexts/User/user/application/UserResetPassword'
import { UserChangePassword } from '../../../Contexts/User/user/application/UserChangePassword'
import { UserFinderByEmail } from '../../../Contexts/User/user/application/UserFindByEmail'
import { CreateUserFromEmployee } from '../../../Contexts/User/user/application/CreateUserFromEmployee'
import { UserDesactivateAccount } from '../../../Contexts/User/user/application/UserDesactivateAccount'
import { UserUnlockAccount } from '../../../Contexts/User/user/application/UserUnlockAccount'
import { UserUpdater } from '../../../Contexts/User/user/application/UserUpdater'
//Controllers
import { UserGetController } from '../../controllers/user/user.get.controller'
import { UserGetAllController } from '../../controllers/user/user.get-all.controller'
import { UserDisabledController } from '../../controllers/user/user.disabled.controller'
import { UserChangePasswordController } from '../../controllers/user/user.change-password.controller'
import { UserResetPasswordController } from '../../controllers/user/user.reset-password.controller'
import { UserCreateController } from '../../controllers/user/user.create.controller'
import { UserUnlockAccountController } from '../../controllers/user/user.unlock-account.controller'
import { UserReactivateAccount } from '../../../Contexts/User/user/application/UserReactivateAccount'
import { UserReactivateAccountController } from '../../controllers/user/user.reactivate.controller'
import { UserPatchController } from '../../controllers/user/user.patch.controller'
import { UserForceChangePasswordController } from '../../controllers/user/user.force-change-password.controller'
import { UserForceChangePassword } from '../../../Contexts/User/user/application/UserForceChangePassword'

export enum UserDependencies {
	Repository = 'userRepository',
	Finder = 'userFinder',
	FinderAll = 'userFinderAll',
	FinderByEmail = 'userFinderByEmail',
	Updater = 'userUpdater',
	Disabled = 'userDisabledAccount',
	ChangePassword = 'userChangePassword',
	ResetPassword = 'userResetPassword',
	Register = 'createUserFromEmployee',
	UnlockAccount = 'userUnlockAccount',
	ReactivateAccount = 'userReactivateAccount',
	DesactivateUser = 'userDesactivateAccount',
	ForceChangePassword = 'userForceChangePassword',

	GetController = 'userGetController',
	GetAllController = 'userGetAllController',
	DisabledController = 'userDisabledController',
	ReactivateAccountController = 'userReactivateAccountController',
	ChangePasswordController = 'userChangePasswordController',
	ResetPasswordController = 'userResetPasswordController',
	CreateController = 'userCreateController',
	PatchController = 'userPatchController',
	ForceChangePasswordController = 'userForceChangePasswordController',
	UnlockAccountController = 'userUnlockAccountController'
}
export const register = (container: AwilixContainer) => {
	container.register({
		userRepository: asClass(SequelizeUserRepository).singleton(),

		userDesactivateAccount: asClass(UserDesactivateAccount),
		userUpdater: asClass(UserUpdater),
		userFinderAll: asClass(UserFinderAll),
		userFinder: asClass(UserFinder),
		userFinderByEmail: asClass(UserFinderByEmail),
		createUserFromEmployee: asClass(CreateUserFromEmployee),
		userResetPassword: asClass(UserResetPassword),
		userChangePassword: asClass(UserChangePassword),
		userDisabledAccount: asClass(UserDisabledAccount),
		userReactivateAccount: asClass(UserReactivateAccount),
		userUnlockAccount: asClass(UserUnlockAccount),
		userForceChangePassword: asClass(UserForceChangePassword),

		userCreateController: asClass(UserCreateController),
		userPatchController: asClass(UserPatchController),
		userGetController: asClass(UserGetController),
		userGetAllController: asClass(UserGetAllController),
		userDisabledController: asClass(UserDisabledController),
		userReactivateAccountController: asClass(UserReactivateAccountController),
		userChangePasswordController: asClass(UserChangePasswordController),
		userResetPasswordController: asClass(UserResetPasswordController),
		userForceChangePasswordController: asClass(UserForceChangePasswordController),
		userUnlockAccountController: asClass(UserUnlockAccountController)
	})
}
