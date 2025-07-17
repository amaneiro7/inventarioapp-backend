import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { config } from '../../../../Shared/infrastructure/config';
import { type TokenDenylistService } from '../../../domain/TokenDenylistService';

export class JwtBearerStrategy extends Strategy {
  constructor(private readonly denylistService: TokenDenylistService) {
    const jwtOptions: StrategyOptions = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.accessTokenSecret,
      passReqToCallback: true,
    };
    super(jwtOptions, async (req, jwtPayload, done) => {
      const token = ExtractJwt.fromAuthHeaderAsBearerToken()(req);
      if (token && (await this.denylistService.isDenylisted(token))) {
        return done(null, false, { message: 'Token has been revoked.' });
      }
      done(null, jwtPayload);
    });
  }
}