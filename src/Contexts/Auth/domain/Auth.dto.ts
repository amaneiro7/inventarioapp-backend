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
	}
	accessToken: string
	refreshToken?: string
}
