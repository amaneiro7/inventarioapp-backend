import passport from 'passport'
import { type Router } from 'express'
import { type AuthLoginController } from '../controllers/auth/auth.login.controller'
import { type AuthLogoutController } from '../controllers/auth/auth.logout.controller'
import { type AuthRefreshTokenController } from '../controllers/auth/auth.refreshtoken.controller'
import { container } from '../di/container'
import { StrategyOptions } from '../../Contexts/Auth/infrastructure/passport/strategy-options'
import { AuthDependencies } from '../di/auth.di'


export const register = (router: Router) => {

  const authLoginController: AuthLoginController = container.resolve(AuthDependencies.LoginController)
  const authLogoutController: AuthLogoutController = container.resolve(AuthDependencies.LogoutController)
  const authRefreshTokenController: AuthRefreshTokenController = container.resolve(AuthDependencies.RefreshTokenController)

  router.post('/auth/login/local',
    passport.authenticate(StrategyOptions.LOCAL, { session: false }),
    authLoginController.run.bind(authLoginController)
  )

  router.get('/auth/refresh-token',
    authRefreshTokenController.run.bind(authRefreshTokenController)
  )

  router.post('/auth/logout',
    authLogoutController.run.bind(authLogoutController)
  )
}
