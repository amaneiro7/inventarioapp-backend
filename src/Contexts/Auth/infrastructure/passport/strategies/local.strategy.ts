import { Strategy as LocalStrategy, type IStrategyOptions } from 'passport-local'
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
		const options: IStrategyOptions = {
			usernameField: 'email',
			passwordField: 'password'
		}

		super(options, async (email, password, done) => {
			try {
				const user = await this.userLoginLocal.run({ email, password })
				done(null, user)
			} catch (error) {
				done(error, false)
			}
		})
		this.userLoginLocal = userLoginLocal
	}
}
