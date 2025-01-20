import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt'
import { config } from '../../../../Shared/infrastructure/config'

export class JwtBearerStrategy extends Strategy {
  constructor() {
    const jwtOptions: StrategyOptions = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.accessTokenSecret
    }
    super(jwtOptions, (jwtOptions, done) => {
      done(null, jwtOptions)
    })
  }
}
