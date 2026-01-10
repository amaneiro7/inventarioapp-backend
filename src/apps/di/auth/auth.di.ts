import { TokenDenylistService } from '../../../Contexts/Auth/domain/service/TokenDenylistService'
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
import { AuthMePermissionsController } from '../../controllers/auth/auth.me.permissions.controller'

export enum AuthDependencies {
	UserLoginLocal = 'userLoginLocal',
	RefreshTokenUseCase = 'refreshTokenUseCase',
	AuthUseCase = 'authUseCase',
	PassportManager = 'passportManager',
	TokenDenylistService = 'tokenDenylistService',

	LocalStrategy = 'localStrategy',
	JwtCookiesStrategy = 'jwtCookiesStrategy',
	JwtBearerStrategy = 'jwtBearerStrategy',

	LoginController = 'authLoginController',
	LogoutController = 'authLogoutController',
	RefreshTokenController = 'authRefreshTokenController',
	AuthMePermissionsController = 'authMePermissionsController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		// Application Use Cases: Transient (default) is correct.
		[AuthDependencies.UserLoginLocal]: asClass(UserLoginLocal).singleton(),
		[AuthDependencies.RefreshTokenUseCase]: asClass(AuthRefreshTokenUseCase),

		// Infrastructure & Strategies: These are stateless and can be singletons for efficiency.
		[AuthDependencies.LocalStrategy]: asClass(LocalAuthStrategy).singleton(),
		[AuthDependencies.JwtCookiesStrategy]: asClass(JwtCookiesStrategy).singleton(),
		[AuthDependencies.JwtBearerStrategy]: asClass(JwtBearerStrategy).singleton(),
		[AuthDependencies.PassportManager]: asClass(PassportManager).singleton(),
		[AuthDependencies.TokenDenylistService]: asClass(TokenDenylistService).singleton(),

		// Controllers: Transient (default) is correct.
		[AuthDependencies.LoginController]: asClass(AuthLoginController),
		[AuthDependencies.LogoutController]: asClass(AuthLogoutController),
		[AuthDependencies.RefreshTokenController]: asClass(AuthRefreshTokenController),
		[AuthDependencies.AuthMePermissionsController]: asClass(AuthMePermissionsController)
	})
}
