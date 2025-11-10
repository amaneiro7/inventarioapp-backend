import { type User } from '../../User/user/domain/entity/User.dto' // Use User.dto
import { type AuthResponseDto } from './Auth.dto'

/**
 * @function buildAuthResponse
 * @description Constructs the authentication response object from user data and tokens.
 * @param {UserDto} user - The user object, including their role and employee details.
 * @param {string} accessToken - The generated access token.
 * @param {string} [refreshToken] - The generated refresh token (optional).
 * @returns {AuthResponseDto} The authentication response DTO.
 */
export function buildAuthResponse(user: User, accessToken: string, refreshToken?: string): AuthResponseDto {
	const { id, employeeId, role, roleId, status, employee } = user // Updated destructuring
	const response: AuthResponseDto = {
		user: {
			id,
			userName: employee.userName,
			employeeId: employeeId, // Added employeeId
			roleId: `${roleId}`,
			status: status, // Added status
			passwordChangeAt: user.passwordChangeAt,
			passwordNeverExpires: user.passwordNeverExpires,
			lastLoginAt: user.lastLoginAt,
			lastLoginIp: user.lastLoginIp,
			role: {
				id: `${role.id}`,
				name: role.name
			},
			employee: {
				// Include relevant employee details
				id: employee.id,
				userName: employee.userName,
				type: employee.type,
				name: employee.name,
				lastName: employee.lastName,
				email: employee.email,
				isStillWorking: employee.isStillWorking,
				employeeCode: employee.employeeCode,
				nationality: employee.nationality,
				cedula: employee.cedula,
				locationId: employee.locationId,
				directivaId: employee.directivaId,
				vicepresidenciaEjecutivaId: employee.vicepresidenciaEjecutivaId,
				vicepresidenciaId: employee.vicepresidenciaId,
				departamentoId: employee.departamentoId,
				cargoId: employee.cargoId,
				extension: employee.extension,
				phone: employee.phone
			}
		},
		accessToken
	}

	if (refreshToken) {
		response.refreshToken = refreshToken
	}

	return response
}
