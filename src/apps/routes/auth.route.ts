import passport from 'passport'
import { StrategyOptions } from '../../Contexts/Auth/infrastructure/passport/strategy-options'

import { type Router } from 'express'
import { type AuthLoginController } from '../controllers/auth.login.controller'
import { type AuthLogoutController } from '../controllers/auth.logout.controller'
import { type AuthRefreshTokenController } from '../controllers/auth.refreshtoken.controller'
import { container } from '../di/container'


export const register = (router: Router) => {

  const authLoginController: AuthLoginController = container.resolve('authLoginController')
  const authLogoutController: AuthLogoutController = container.resolve('authLogoutController')
  const authRefreshTokenController: AuthRefreshTokenController = container.resolve('authRefreshTokenController')

  router.post('/login/local',
    passport.authenticate(StrategyOptions.LOCAL, { session: false }),
    authLoginController.run.bind(authLoginController)
  )

  router.get('/refresh-token',
    authRefreshTokenController.run.bind(authRefreshTokenController)
  )

  router.post('/logout',
    authLogoutController.run.bind(authLogoutController)
  )
}
