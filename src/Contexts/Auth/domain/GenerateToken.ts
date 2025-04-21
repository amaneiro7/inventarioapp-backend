import { sign, type JwtPayload } from 'jsonwebtoken'

import { type UserPrimitives } from '../../User/user/domain/User'
import { type Primitives } from '../../Shared/domain/value-object/Primitives'
import { type RoleId } from '../../User/Role/domain/RoleId'
import { type UserEmail } from '../../User/user/domain/UserEmail'
import { type UserId } from '../../User/user/domain/UserId'
import { config } from '../../Shared/infrastructure/config'

export interface Tokens {
	accessToken: string
	refreshToken: string
}

export interface JwtPayloadUser extends JwtPayload {
	sub: Primitives<UserId>
	email: Primitives<UserEmail>
	roleId: Primitives<RoleId>
	iss: 'SoporteTecnicoBNC'
}

const accessTokenExpiresIn = config.accessTokenExpiresIn
const refreshTokenExpiresIn = config.refreshTokenExpiresIn
const issuer = 'SoporteTecnicoBNC'
const accessTokenSecret = config.accessTokenSecret
const refreshTokenSecret = config.refreshTokenSecret

function generateTokens(
	payload: Pick<UserPrimitives, 'id' | 'email' | 'roleId'>,
	secret: string,
	expiresIn: string
): string {
	const { id, email, roleId } = payload
	const tokenPayload: JwtPayloadUser = {
		sub: id,
		email,
		roleId,
		iss: issuer
	}
	return sign(tokenPayload, secret, { expiresIn })
}

export function generateAceessToken(user: Pick<UserPrimitives, 'id' | 'email' | 'roleId'>): string {
	return generateTokens(user, accessTokenSecret, accessTokenExpiresIn)
}

export function generateRefreshToken(user: Pick<UserPrimitives, 'id' | 'email' | 'roleId'>): string {
	return generateTokens(user, refreshTokenSecret, refreshTokenExpiresIn)
}
