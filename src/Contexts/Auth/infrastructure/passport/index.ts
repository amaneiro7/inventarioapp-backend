import passport, { PassportStatic } from 'passport'
import { LocalAuthStrategy } from './strategies/local.strategy'
import { JwtCookiesStrategy } from './strategies/jwt-cookie.strategy'

export class PassportManager {
  constructor(
    private readonly localStrategy: LocalAuthStrategy,
    private readonly jwtCookiesStrategy: JwtCookiesStrategy,
  ) { }

  public async initialize(): Promise<PassportStatic> {
    passport.use(this.localStrategy)
    passport.use(this.jwtCookiesStrategy)

    return passport
  }
}

// export async function createPassportInstance(): Promise<passport.PassportStatic> {
//   passport.use(await createLocalStrategy())
//   passport.use(jwtBearerStrategy)

//   return passport
// }

// export const Strategy = {
//   LOCAL: 'local',
//   JWT: 'jwt',
// } as const
