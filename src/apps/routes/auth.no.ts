import { type Router } from 'express'
import passport from 'passport'
import { Strategy } from '../../Contexts/Auth/infrastructure/passport'
import container from '../dependency-injections'
import { type AuthLoginController } from '../controllers/auth.login.controller'
import { type AuthLogoutController } from '../controllers/auth.logout.controller'
import { type AuthRefreshTokenController } from '../controllers/auth.refreshtoken.controller'


export const register = (router: Router) => {

  const authLoginController: AuthLoginController = container.get('Apps.controllers.AuthLoginController')
  const authLogoutController: AuthLogoutController = container.get('Apps.controllers.AuthLogoutController')
  const authRefreshTokenController: AuthRefreshTokenController = container.get('Apps.controllers.AuthRefreshTokenController')

  router.post('/login/local',
    passport.authenticate(Strategy.LOCAL, { session: false }),
    authLoginController.run.bind(authLoginController)
  )

  router.get('/refresh-token',
    authRefreshTokenController.run.bind(authRefreshTokenController)
  )

  router.post('/logout',
    authLogoutController.run.bind(authLogoutController)
  )
}
