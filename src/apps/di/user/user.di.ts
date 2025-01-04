import { asClass, type AwilixContainer } from "awilix"
import { UserFinder } from '../../../Contexts/User/user/application/UserFinder'
import { UserFinderAll } from '../../../Contexts/User/user/application/UserFinderAll'
import { UserRegister } from '../../../Contexts/User/user/application/UserRegister'
import { UserRemover } from '../../../Contexts/User/user/application/UserRemover'
import { UserResetPassword } from '../../../Contexts/User/user/application/UserResetPassword'
import { UserUpdater } from '../../../Contexts/User/user/application/UserUpdater'
import { UserSearchByCriteria } from '../../../Contexts/User/user/application/UserByCriteriaSearcher'
import { UserFinderByEmail } from '../../../Contexts/User/user/application/UserFindByEmail'
import { SequelizeUserRepository } from '../../../Contexts/User/user/infrastructure/persistance/Sequelize/SequelizeUserRepository'
import { UserChangePassword } from "../../../Contexts/User/user/application/UserChangePassword"
import { UserGetController } from "../../controllers/user/user.get.controller"
import { UserGetAllController } from "../../controllers/user/user.get-all.controller"
import { UserPostController } from "../../controllers/user/user.post.controller"
import { UserPatchController } from "../../controllers/user/user.patch.controller"
import { UserDeleteController } from "../../controllers/user/user.delete.controller"
import { UserSearchByCriteriaController } from "../../controllers/user/user.search-by-criteria.controller"
import { UserGetByEmailController } from "../../controllers/user/user.get-by-email.controller"
import { UserChangePasswordController } from "../../controllers/user/user.change-password.controller"
import { UserResetPasswordController } from "../../controllers/user/user.reset-password.controller"


export enum UserDependencies {
    Repository = 'userRepository',
    Finder = 'userFinder',
    FinderAll = 'userFinderAll',
    SearchByCriteria = 'userSearchByCriteria',
    FinderByEmail = 'userFinderByEmail',
    Register = 'userRegister',
    Updater = 'userUpdater',
    Remover = 'userRemover',
    ChangePassword = 'userChangePassword',
    ResetPassword = 'userResetPassword',

    GetController = 'userGetController',
    GetAllController = 'userGetAllController',
    PostController = 'userPostController',
    PatchController = 'userPatchController',
    DeleteController = 'userDeleteController',
    GetByCriteriaController = 'userGetByCriteriaController',
    GetByEmailController = 'userGetByEmailController',
    ChangePasswordController = 'userChangePasswordController',
    ResetPasswordController = 'userResetPasswordController',
}
export const register = (container: AwilixContainer) => {

    container.register({
        userRepository: asClass(SequelizeUserRepository).singleton(),
        userFinder: asClass(UserFinder),
        userFinderAll: asClass(UserFinderAll),
        userFinderByEmail: asClass(UserFinderByEmail),
        userRegister: asClass(UserRegister),
        userSearchByCriteria: asClass(UserSearchByCriteria),
        userUpdater: asClass(UserUpdater),
        userResetPassword: asClass(UserResetPassword),
        userChangePassword: asClass(UserChangePassword),
        userRemover: asClass(UserRemover),
        userGetController: asClass(UserGetController),
        userGetAllController: asClass(UserGetAllController),
        userPostController: asClass(UserPostController),
        userPatchController: asClass(UserPatchController),
        userDeleteController: asClass(UserDeleteController),
        userGetByCriteriaController: asClass(UserSearchByCriteriaController),
        userGetByEmailController: asClass(UserGetByEmailController),
        userChangePasswordController: asClass(UserChangePasswordController),
        userResetPasswordController: asClass(UserResetPasswordController),
    })
}

