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
		[UserDependencies.Repository]: asClass(SequelizeUserRepository).singleton(),

		[UserDependencies.DesactivateUser]: asClass(UserDesactivateAccount).singleton(),
		[UserDependencies.Updater]: asClass(UserUpdater),
		[UserDependencies.FinderAll]: asClass(UserFinderAll),
		[UserDependencies.Finder]: asClass(UserFinder),
		[UserDependencies.FinderByEmail]: asClass(UserFinderByEmail),
		[UserDependencies.Register]: asClass(CreateUserFromEmployee),
		[UserDependencies.ResetPassword]: asClass(UserResetPassword),
		[UserDependencies.ChangePassword]: asClass(UserChangePassword),
		[UserDependencies.Disabled]: asClass(UserDisabledAccount),
		[UserDependencies.ReactivateAccount]: asClass(UserReactivateAccount),
		[UserDependencies.UnlockAccount]: asClass(UserUnlockAccount),
		[UserDependencies.ForceChangePassword]: asClass(UserForceChangePassword),

		[UserDependencies.CreateController]: asClass(UserCreateController),
		[UserDependencies.PatchController]: asClass(UserPatchController),
		[UserDependencies.GetController]: asClass(UserGetController),
		[UserDependencies.GetAllController]: asClass(UserGetAllController),
		[UserDependencies.DisabledController]: asClass(UserDisabledController),
		[UserDependencies.ReactivateAccountController]: asClass(UserReactivateAccountController),
		[UserDependencies.ChangePasswordController]: asClass(UserChangePasswordController),
		[UserDependencies.ResetPasswordController]: asClass(UserResetPasswordController),
		[UserDependencies.ForceChangePasswordController]: asClass(UserForceChangePasswordController),
		[UserDependencies.UnlockAccountController]: asClass(UserUnlockAccountController)
	})
}
