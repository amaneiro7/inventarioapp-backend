import passport, { type PassportStatic } from 'passport'
import { StrategyOptions } from './strategy-options'
import { type LocalAuthStrategy } from './strategies/local.strategy'
import { type JwtCookiesStrategy } from './strategies/jwt-cookie.strategy'
import { type JwtBearerStrategy } from './strategies/jwt-bearer.strategy'

/**
 * @class PassportManager
 * @description Manages the initialization and configuration of Passport.js strategies.
 * This class is responsible for integrating the local, JWT cookie, and JWT bearer strategies
 * into the Passport instance, making them available for use in the application's authentication middleware.
 */
export class PassportManager {
	constructor(
		private readonly localStrategy: LocalAuthStrategy,
		private readonly jwtCookiesStrategy: JwtCookiesStrategy,
		private readonly jwtBearerStrategy: JwtBearerStrategy
	) {}

	/**
	 * @method initialize
	 * @description Initializes and configures the Passport strategies.
	 * @returns {Promise<PassportStatic>} A promise that resolves to the configured Passport instance.
	 */
	public async initialize(): Promise<PassportStatic> {
		passport.use(StrategyOptions.LOCAL, this.localStrategy)
		passport.use(StrategyOptions.JWTCOOKIE, this.jwtCookiesStrategy)
		passport.use(StrategyOptions.JWTBEARER, this.jwtBearerStrategy)

		return passport
	}
}
