import { type RolePrimitives } from '../../User/Role/domain/Role.dto'
import { type UserPrimitives } from '../../User/user/domain/User'
import { type AuthResponseDto } from './Auth.dto'

type UserWithRole = UserPrimitives & {
	role: RolePrimitives
}

/**
 * @function buildAuthResponse
 * @description Constructs the authentication response object from user data and tokens.
 * @param {UserWithRole} user - The user object, including their role.
 * @param {string} accessToken - The generated access token.
 * @param {string} [refreshToken] - The generated refresh token (optional).
 * @returns {AuthResponseDto} The authentication response DTO.
 */
export function buildAuthResponse(user: UserWithRole, accessToken: string, refreshToken?: string): AuthResponseDto {
	const { id, lastName, name, email, role, roleId } = user
	const response: AuthResponseDto = {
		user: {
			id,
			name,
			lastName,
			email,
			roleId: `${roleId}`,
			role: {
				id: `${role.id}`,
				name: role.name
			}
		},
		accessToken
	}

	if (refreshToken) {
		response.refreshToken = refreshToken
	}

	return response
}
