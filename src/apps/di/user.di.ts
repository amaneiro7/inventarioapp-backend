import { asClass, type AwilixContainer } from "awilix"
import { UserFinder } from '../../Contexts/User/user/application/UserFinder'
import { UserFinderAll } from '../../Contexts/User/user/application/UserFinderAll'
import { UserRegister } from '../../Contexts/User/user/application/UserRegister'
import { UserRemover } from '../../Contexts/User/user/application/UserRemover'
import { UserResetPassword } from '../../Contexts/User/user/application/UserResetPassword'
import { UserUpdater } from '../../Contexts/User/user/application/UserUpdater'
import { UserByCriteriaSearcher } from '../../Contexts/User/user/application/UserByCriteriaSearcher'
import { UserFinderByEmail } from '../../Contexts/User/user/application/UserFindByEmail'
import { SequelizeUserRepository } from '../../Contexts/User/user/infrastructure/persistance/Sequelize/SequelizeUserRepository'

export const register = (container: AwilixContainer) => {

    container.register({
        userRepository: asClass(SequelizeUserRepository).singleton(),
        userByCriteriaSearcher: asClass(UserByCriteriaSearcher),
        userFinderByEmail: asClass(UserFinderByEmail),
        userFinder: asClass(UserFinder),
        userFinderAll: asClass(UserFinderAll),
        userRegister: asClass(UserRegister),
        userRemover: asClass(UserRemover),
        userResetPassword: asClass(UserResetPassword),
        userUpdater: asClass(UserUpdater),
    })
}

