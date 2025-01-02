// import { ExtractJwt, Strategy, type StrategyOptions } from 'passport-jwt'

import { type Request } from "express";
import { ExtractJwt, Strategy, type StrategyOptions } from "passport-jwt";
import { config } from "../../../../Shared/infrastructure/config";

// import { type Request } from 'express'
// import { config } from '../../../../Shared/infrastructure/config'

// const jwtOptions: StrategyOptions = {
//   jwtFromRequest: ExtractJwt.fromExtractors([(request: Request) => {
//     console.log('jwt-Cookie.strategy', request?.cookies)
//     return request?.cookies?.refreshToken
//   }
//   ]),
//   secretOrKey: config.refreshTokenSecret
// }

// export const jwtCookieStrategy = new Strategy(jwtOptions, (jwtPayload, done) => {
//   done(null, jwtPayload)
// })
// This is the middleware that will be used to protect routes. If a request is made

export class JwtCookiesStrategy extends Strategy {
  constructor() {
    console.log('JwtCookiesStrategy')
    const jwtOptions: StrategyOptions = {
      jwtFromRequest: ExtractJwt.fromExtractors([(request: Request) => {
        return request?.cookies?.refreshToken
      }]),
      secretOrKey: config.refreshTokenSecret
    }
    super(jwtOptions, (jwtOptions, done) => {
      done(null, jwtOptions);
    })
  }
}
