import { type UserPrimitives } from '../../User/user/domain/User'
import { type AuthResponseDto } from './Auth.dto'

/**
 * @function buildAuthResponse
 * @description Constructs the authentication response object from user data and tokens.
 * @param {UserPrimitives} user - The user object.
 * @param {string} accessToken - The generated access token.
 * @param {string} [refreshToken] - The generated refresh token (optional).
 * @returns {AuthResponseDto} The authentication response DTO.
 */
export function buildAuthResponse(user: UserPrimitives, accessToken: string, refreshToken?: string): AuthResponseDto {
	const { id, lastName, name, email } = user
	const response: AuthResponseDto = {
		user: {
			id,
			name,
			lastName,
			email
		},
		accessToken
	}

	if (refreshToken) {
		response.refreshToken = refreshToken
	}

	return response
}
