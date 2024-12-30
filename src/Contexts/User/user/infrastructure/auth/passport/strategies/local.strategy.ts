import { Strategy } from 'passport-local'
import { UserLoginLocal } from '../../../../../../Auth/application/login/UserLoginLocal'
import container from '../../../../../../../apps/dependency-injections'

export async function createLocalStrategy(): Promise<Strategy> {
  return new Strategy({
    usernameField: 'email',
    passwordField: 'password'
  }, async (email: string, intoPassword: string, done) => {
    try {
      const loginService: UserLoginLocal = container.get('Auth.LoginLocal')
      const user = await loginService.run({ email, intoPassword })
      done(null, user)
    } catch (error) {
      done(error, false)
    }
  })
}
