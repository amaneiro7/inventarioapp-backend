import { type UserDto } from '../../../User/user/domain/entity/User.dto'

/**
 * @interface AuthResponseDto
 * @description Defines the data transfer object for authentication responses.
 * This structure is used to send back user information and tokens upon successful authentication.
 */

export type {}

export interface AuthResponseDto {
	user: UserDto
	accessToken: string
	refreshToken?: string
}
