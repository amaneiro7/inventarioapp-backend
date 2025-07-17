import { type Request } from 'express';
import { ExtractJwt, Strategy, type StrategyOptions } from 'passport-jwt';
import { config } from '../../../../Shared/infrastructure/config';
import { type TokenDenylistService } from '../../../domain/TokenDenylistService';

export class JwtCookiesStrategy extends Strategy {
  constructor(private readonly denylistService: TokenDenylistService) {
    const jwtOptions: StrategyOptions = {
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          return request?.cookies?.refreshToken;
        },
      ]),
      secretOrKey: config.refreshTokenSecret,
      passReqToCallback: true,
    };
    super(jwtOptions, async (req, jwtPayload, done) => {
      const token = req?.cookies?.refreshToken;
      if (token && (await this.denylistService.isDenylisted(token))) {
        return done(null, false, { message: 'Token has been revoked.' });
      }
      done(null, jwtPayload);
    });
  }
}