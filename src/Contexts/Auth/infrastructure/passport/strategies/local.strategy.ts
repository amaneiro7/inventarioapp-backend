import { Strategy as LocalStrategy, type IStrategyOptions } from 'passport-local'
import { type UserLoginLocal } from '../../../application/UserLoginLocal'

export class LocalAuthStrategy extends LocalStrategy {
	constructor(private readonly userLoginLocal: UserLoginLocal) {
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
	}
}
