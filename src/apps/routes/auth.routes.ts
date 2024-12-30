import { type Router } from 'express'
import passport from 'passport'
import { Strategy } from '../../../Contexts/User/user/infrastructure/auth/passport'
import { AuthPostController } from '../controller/AuthPostController'
import { type Repository } from '../../../Contexts/Shared/domain/Repository'

export const register = (router: Router) => {

  const controller = new AuthPostController(repository)

  router.post('/login/local',
    passport.authenticate(Strategy.LOCAL, { session: false }),
    authPostController.login
  )

  router.get('/refresh-token',
    authPostController.refreshToken
  )

  router.post('/logout',
    authPostController.logout
  )
  return router
}
