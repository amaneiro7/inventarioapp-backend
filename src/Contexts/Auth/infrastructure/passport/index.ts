import passport, { type PassportStatic } from 'passport'
import { type LocalAuthStrategy } from './strategies/local.strategy'
import { type JwtCookiesStrategy } from './strategies/jwt-cookie.strategy'
import { type JwtBearerStrategy } from './strategies/jwt-bearer.strategy'
import { StrategyOptions } from './strategy-options'

export class PassportManager {
	constructor(
		private readonly localStrategy: LocalAuthStrategy,
		private readonly jwtCookiesStrategy: JwtCookiesStrategy,
		private readonly jwtBearerStrategy: JwtBearerStrategy
	) {}

	public async initialize(): Promise<PassportStatic> {
		passport.use(StrategyOptions.LOCAL, this.localStrategy)
		passport.use(StrategyOptions.JWTCOOKIE, this.jwtCookiesStrategy)
		passport.use(StrategyOptions.JWTBEARER, this.jwtBearerStrategy)

		return passport
	}
}
