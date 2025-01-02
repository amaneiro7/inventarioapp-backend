import { asClass, createContainer } from 'awilix'
import { type CacheRepository } from '../../Contexts/Shared/domain/CacheRepository'
import { type Logger } from '../../Contexts/Shared/domain/Logger'
import { WinstonLogger } from '../../Contexts/Shared/infrastructure/WinstonLogger'
import { RedisRepository } from '../../Contexts/Shared/infrastructure/persistance/Redis/RedisRepository'
import { ChangePassword } from '../../Contexts/Auth/application/ChangePassword'
import { UserLoginLocal } from '../../Contexts/Auth/application/UserLoginLocal'
import { LocalAuthStrategy } from '../../Contexts/Auth/infrastructure/passport/strategies/local.strategy'
import { JwtCookiesStrategy } from '../../Contexts/Auth/infrastructure/passport/strategies/jwt-cookie.strategy'
import { PassportManager } from '../../Contexts/Auth/infrastructure/passport'
import { UserByCriteriaSearcher } from '../../Contexts/User/user/application/UserByCriteriaSearcher'
import { UserFinderByEmail } from '../../Contexts/User/user/application/UserFindByEmail'
import { UserFinder } from '../../Contexts/User/user/application/UserFinder'
import { UserFinderAll } from '../../Contexts/User/user/application/UserFinderAll'
import { UserRegister } from '../../Contexts/User/user/application/UserRegister'
import { UserRemover } from '../../Contexts/User/user/application/UserRemover'
import { UserResetPassword } from '../../Contexts/User/user/application/UserResetPassword'
import { UserUpdater } from '../../Contexts/User/user/application/UserUpdater'
import { SequelizeUserRepository } from '../../Contexts/User/user/infrastructure/persistance/Sequelize/SequelizeUserRepository'
import { SequelizeBrandRepository } from '../../Contexts/Brand/infrastructure/Sequelize/SequelizeBrandRepository'
import { BrandCreator } from '../../Contexts/Brand/application/BrandCreator'
import { BrandFinderAll } from '../../Contexts/Brand/application/BrandFinderAll'
import { BrandUpdater } from '../../Contexts/Brand/application/BrandUpdater'
import { BrandFinder } from '../../Contexts/Brand/application/BrandFinder'
import { BrandPatchController } from '../controllers/brand.patch.controller'
import { BrandGetFinderAllController } from '../controllers/brand.getFinderAll.controller'
import { BrandGetFinderController } from '../controllers/brand.getFinder.controller'
import { BrandPostController } from '../controllers/brand.post.controller'


export const container = createContainer({ injectionMode: 'CLASSIC' })
container.register({
    // Shared 
    logger: asClass(WinstonLogger),
    cache: asClass(RedisRepository).singleton(),
    // infra
    userRepository: asClass(SequelizeUserRepository).singleton(),
    brandRepository: asClass(SequelizeBrandRepository).singleton(),
    // Auth
    changePassword: asClass(ChangePassword),
    userLoginLocal: asClass(UserLoginLocal),
    localStrategy: asClass(LocalAuthStrategy),
    jwtCookiesStrategy: asClass(JwtCookiesStrategy),
    passportManager: asClass(PassportManager),
    // user
    userByCriteriaSearcher: asClass(UserByCriteriaSearcher),
    userFinderByEmail: asClass(UserFinderByEmail),
    userFinder: asClass(UserFinder),
    userFinderAll: asClass(UserFinderAll),
    userRegister: asClass(UserRegister),
    userRemover: asClass(UserRemover),
    userResetPassword: asClass(UserResetPassword),
    userUpdater: asClass(UserUpdater),
    // brand
    brandCreator: asClass(BrandCreator),
    brandFinder: asClass(BrandFinder),
    brandFinderAll: asClass(BrandFinderAll),
    brandUpdater: asClass(BrandUpdater),
    brandPostController: asClass(BrandPostController),
    brandGetController: asClass(BrandGetFinderController),
    brandGetAllController: asClass(BrandGetFinderAllController),
    brandPatchController: asClass(BrandPatchController),
})

export const logger: Logger = container.resolve('logger')
export const cache: CacheRepository = container.resolve("cache")
export const changePassword: ChangePassword = container.resolve("changePassword")
export const userLoginLocal: UserLoginLocal = container.resolve("userLoginLocal")
export const passportManager: PassportManager = container.resolve('passportManager')
export const userByCriteriaSearcher: UserByCriteriaSearcher = container.resolve('userByCriteriaSearcher')
export const userFinderByEmail: UserFinderByEmail = container.resolve('userFinderByEmail')

// const userFinder: UserFinder = container.resolve('userFinder')
// const userFinderAll: UserFinderAll = container.resolve('userFinderAll')
// const userRegister: UserRegister = container.resolve('userRegister')
// const userRemover: UserRemover = container.resolve('userRemover')
// const userResetPassword: UserResetPassword = container.resolve('userResetPassword')
// const userUpdater: UserUpdater = container.resolve('userUpdater')




