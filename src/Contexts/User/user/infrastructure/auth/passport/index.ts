import passport from 'passport'
import { jwtBearerStrategy } from './strategies/jwt-bearer.strategy'
//import { jwtCookieStrategy } from './strategies/jwt-cookie.strategy'
import { createLocalStrategy } from './strategies/local.strategy'

export async function createPassportInstance(): Promise<passport.PassportStatic> {
  passport.use(await createLocalStrategy())
  passport.use(jwtBearerStrategy)

  return passport
}

export const Strategy = {
  LOCAL: 'local',
  JWT: 'jwt',
} as const
