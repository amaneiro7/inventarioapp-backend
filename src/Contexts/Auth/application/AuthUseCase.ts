import { generateAccessToken, generateRefreshToken } from '../domain/GenerateToken'
import { buildAuthResponse } from '../domain/buildAuthResponse'
import { type RolePrimitives } from '../../User/Role/domain/Role.dto'
import { type UserPrimitives } from '../../User/user/domain/User'
import { type AuthResponseDto } from '../domain/Auth.dto'

type ReqUser = UserPrimitives & {
	role: RolePrimitives
}

/**
 * @description Authenticates a user and generates access and refresh tokens.
 * @param {ReqUser} user - The authenticated user object, including role primitives.
 * @returns {Promise<AuthResponseDto>} A promise that resolves to the authentication response, containing tokens and user data.
 */
export const authenticaUser = async (user: ReqUser): Promise<AuthResponseDto> => {
	const accessToken = generateAccessToken(user)
	const refreshToken = generateRefreshToken(user)

	const authResponse = buildAuthResponse(user, accessToken, refreshToken)

	return authResponse
}
