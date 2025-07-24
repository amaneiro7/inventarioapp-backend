import { type Request } from 'express'
import { ExtractJwt, Strategy, type StrategyOptions } from 'passport-jwt'
import { config } from '../../../../Shared/infrastructure/config'
import { type TokenDenylistService } from '../../../domain/TokenDenylistService'

/**
 * @class JwtCookiesStrategy
 * @extends Strategy
 * @description Implements a JWT strategy for Passport that extracts the refresh token from an HTTP-only cookie.
 * This is typically used for the refresh token rotation flow. It also checks if the token has been
 * denylisted to prevent reuse of revoked tokens.
 */
export class JwtCookiesStrategy extends Strategy {
	private readonly tokenDenylistService: TokenDenylistService
	constructor({ tokenDenylistService }: { tokenDenylistService: TokenDenylistService }) {
		const jwtOptions: StrategyOptions = {
			jwtFromRequest: ExtractJwt.fromExtractors([
				(request: Request) => {
					return request?.cookies?.refreshToken
				}
			]),
			secretOrKey: config.refreshTokenSecret,
			passReqToCallback: true
		}
		super(jwtOptions, async (req, jwtPayload, done) => {
			const token = req?.cookies?.refreshToken
			if (token && (await this.tokenDenylistService.isDenylisted(token))) {
				return done(null, false, { message: 'Token has been revoked.' })
			}
			done(null, jwtPayload)
		})
		this.tokenDenylistService = tokenDenylistService
	}
}
