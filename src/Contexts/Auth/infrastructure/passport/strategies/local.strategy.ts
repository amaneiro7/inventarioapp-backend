import { Strategy as LocalStrategy, type IStrategyOptions } from 'passport-local'
import { type UserLoginLocal } from '../../../application/UserLoginLocal'

// export async function createLocalStrategy(): Promise<LocalStrategy> {
//   return new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'password'
//   }, async (email: string, intoPassword: string, done) => {
//     try {
//       const loginService = new UserLoginLocal()
//       const user = await loginService.run({ email, password })
//       done(null, user)
//     } catch (error) {
//       done(error, false)
//     }
//   })
// }

export class LocalAuthStrategy extends LocalStrategy {
  constructor(private readonly userLoginLocal: UserLoginLocal) {
    console.log('LocalAuthStrategy')
    const options: IStrategyOptions = {
      usernameField: 'email',
      passwordField: "password",
    }

    super(options, async (email, password, done) => {
      try {
        const user = await this.userLoginLocal.run({ email, password })
        done(null, user)
      } catch (error) {
        done(error, false)
      }
    })
  }
}