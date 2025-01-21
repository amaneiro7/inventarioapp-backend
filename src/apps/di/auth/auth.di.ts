import { asClass, type AwilixContainer } from 'awilix'
import { UserLoginLocal } from '../../../Contexts/Auth/application/UserLoginLocal'
import { LocalAuthStrategy } from '../../../Contexts/Auth/infrastructure/passport/strategies/local.strategy'
import { JwtCookiesStrategy } from '../../../Contexts/Auth/infrastructure/passport/strategies/jwt-cookie.strategy'
import { PassportManager } from '../../../Contexts/Auth/infrastructure/passport'
import { AuthLoginController } from '../../controllers/auth/auth.login.controller'
import { JwtBearerStrategy } from '../../../Contexts/Auth/infrastructure/passport/strategies/jwt-bearer.strategy'
import { AuthLogoutController } from '../../controllers/auth/auth.logout.controller'
import { AuthRefreshTokenController } from '../../controllers/auth/auth.refreshtoken.controller'
import { AuthRefreshTokenUseCase } from '../../../Contexts/Auth/application/AuthRefhreshTokenUseCase'
AuthRefreshTokenUseCase
export enum AuthDependencies {
	UserLoginLocal = 'userLoginLocal',
	RefreshTokenUseCase = 'refreshTokenUseCase',
	PassportManager = 'passportManager',
	LoginController = 'authLoginController',
	LogoutController = 'authLogoutController',
	RefreshTokenController = 'authRefreshTokenController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		userLoginLocal: asClass(UserLoginLocal),
		refreshTokenUseCase: asClass(AuthRefreshTokenUseCase),
		localStrategy: asClass(LocalAuthStrategy),
		jwtCookiesStrategy: asClass(JwtCookiesStrategy),
		jwtBearerStrategy: asClass(JwtBearerStrategy),
		passportManager: asClass(PassportManager),
		authLoginController: asClass(AuthLoginController),
		authLogoutController: asClass(AuthLogoutController),
		authRefreshTokenController: asClass(AuthRefreshTokenController)
	})
}
