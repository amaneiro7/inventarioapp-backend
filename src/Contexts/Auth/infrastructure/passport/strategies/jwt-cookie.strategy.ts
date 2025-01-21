import { type Request } from 'express'
import { ExtractJwt, Strategy, type StrategyOptions } from 'passport-jwt'
import { config } from '../../../../Shared/infrastructure/config'
export class JwtCookiesStrategy extends Strategy {
	constructor() {
		const jwtOptions: StrategyOptions = {
			jwtFromRequest: ExtractJwt.fromExtractors([
				(request: Request) => {
					return request?.cookies?.refreshToken
				}
			]),
			secretOrKey: config.refreshTokenSecret
		}
		super(jwtOptions, (jwtOptions, done) => {
			done(null, jwtOptions)
		})
	}
}
