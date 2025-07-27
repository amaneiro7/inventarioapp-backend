import { type RolePrimitives } from '../../User/Role/domain/Role.dto'

/**
 * @interface AuthResponseDto
 * @description Defines the data transfer object for authentication responses.
 * This structure is used to send back user information and tokens upon successful authentication.
 */
export interface AuthResponseDto {
	user: {
		id: string
		name: string
		lastName: string
		email: string
		roleId: string
		role: RolePrimitives
	}
	accessToken: string
	refreshToken?: string
}
