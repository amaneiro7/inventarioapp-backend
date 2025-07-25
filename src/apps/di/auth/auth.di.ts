import { TokenDenylistService } from '../../../Contexts/Auth/domain/TokenDenylistService'
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

export enum AuthDependencies {
	UserLoginLocal = 'userLoginLocal',
	RefreshTokenUseCase = 'refreshTokenUseCase',
	AuthUseCase = 'authUseCase',
	PassportManager = 'passportManager',
	LoginController = 'authLoginController',
	LogoutController = 'authLogoutController',
	RefreshTokenController = 'authRefreshTokenController',
	TokenDenylistService = 'tokenDenylistService'
}

export const register = (container: AwilixContainer) => {
	container.register({
		// Application Use Cases: Transient (default) is correct.
		userLoginLocal: asClass(UserLoginLocal).singleton(),
		refreshTokenUseCase: asClass(AuthRefreshTokenUseCase),

		// Infrastructure & Strategies: These are stateless and can be singletons for efficiency.
		localStrategy: asClass(LocalAuthStrategy).singleton(),
		jwtCookiesStrategy: asClass(JwtCookiesStrategy).singleton(),
		jwtBearerStrategy: asClass(JwtBearerStrategy).singleton(),
		passportManager: asClass(PassportManager).singleton(),
		tokenDenylistService: asClass(TokenDenylistService).singleton(),

		// Controllers: Transient (default) is correct.
		authLoginController: asClass(AuthLoginController),
		authLogoutController: asClass(AuthLogoutController),
		authRefreshTokenController: asClass(AuthRefreshTokenController)
	})
}
