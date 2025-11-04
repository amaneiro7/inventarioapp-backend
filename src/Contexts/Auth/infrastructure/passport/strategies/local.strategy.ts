import { Strategy as LocalStrategy, type IStrategyOptionsWithRequest } from 'passport-local'
import { type UserLoginLocal } from '../../../application/UserLoginLocal'

/**
 * @class LocalAuthStrategy
 * @extends LocalStrategy
 * @description Implements the local authentication strategy for Passport.
 * It uses the `UserLoginLocal` use case to validate a user's email and password.
 */
export class LocalAuthStrategy extends LocalStrategy {
	private readonly userLoginLocal: UserLoginLocal
	constructor({ userLoginLocal }: { userLoginLocal: UserLoginLocal }) {
		const options: IStrategyOptionsWithRequest = {
			usernameField: 'userNameOrEmail',
			passwordField: 'password',
			passReqToCallback: true
		}

		super(options, async (req, userNameOrEmail, password, done) => {
			try {
				// Obtener la IP del cliente de forma más robusta
				const currentIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress

				console.log('currentIp', currentIp)
				const user = await this.userLoginLocal.run({ userNameOrEmail, password, currentIp })
				done(null, user)
			} catch (error) {
				done(error, false)
			}
		})
		this.userLoginLocal = userLoginLocal
	}
}
