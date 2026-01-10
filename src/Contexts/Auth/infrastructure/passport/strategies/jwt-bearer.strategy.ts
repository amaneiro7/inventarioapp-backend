import { ExtractJwt, Strategy, type StrategyOptions } from 'passport-jwt'
import { config } from '../../../../Shared/infrastructure/config'
import { type TokenDenylistService } from '../../../domain/service/TokenDenylistService'

/**
 * @class JwtBearerStrategy
 * @extends Strategy
 * @description Implements the JWT Bearer authentication strategy for Passport.
 * This strategy extracts the JWT from the Authorization header as a bearer token and verifies it.
 * It also checks if the token has been revoked by consulting the `TokenDenylistService`.
 */
export class JwtBearerStrategy extends Strategy {
	private readonly tokenDenylistService: TokenDenylistService
	constructor({ tokenDenylistService }: { tokenDenylistService: TokenDenylistService }) {
		const jwtOptions: StrategyOptions = {
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: config.accessTokenSecret,
			passReqToCallback: true
		}
		super(jwtOptions, async (req, jwtPayload, done) => {
			const token = ExtractJwt.fromAuthHeaderAsBearerToken()(req)
			if (token && (await this.tokenDenylistService.isDenylisted(token))) {
				return done(null, false, { message: 'Token has been revoked.' })
			}
			done(null, jwtPayload)
		})
		this.tokenDenylistService = tokenDenylistService
	}
}
