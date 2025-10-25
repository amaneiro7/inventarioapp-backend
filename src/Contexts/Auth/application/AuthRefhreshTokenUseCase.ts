import { UserId } from '../../User/user/domain/valueObject/UserId'
import { generateAccessToken, generateRefreshToken, type JwtPayloadUser } from '../domain/GenerateToken'
import { buildAuthResponse } from '../domain/buildAuthResponse'
import { UserDoesNotExistError } from '../../User/user/domain/Errors/UserDoesNotExistError'
import { EmployeeTypesEnum } from '../../employee/Employee/domain/valueObject/EmployeeType'
import { UserStatusEnum } from '../../User/user/domain/valueObject/UserStatus'
import { type RolePrimitives } from '../../User/Role/domain/Role.dto'
import { type UserPrimitives } from '../../User/user/domain/entity/User.dto'
import { type EmployeePrimitives } from '../../employee/Employee/domain/entity/Employee.dto'
import { type UserRepository } from '../../User/user/domain/Repository/UserRepository'
import { type AuthResponseDto } from '../domain/Auth.dto'

/**
 * @class AuthRefreshTokenUseCase
 * @description Use case for refreshing access tokens. It enhances security by ensuring that the user
 * associated with the refresh token exists and is active. It generates a new set of access and
 * refresh tokens upon successful validation.
 */
export class AuthRefreshTokenUseCase {
	// Declare userRepository as a class property
	private readonly userRepository: UserRepository
	constructor({ userRepository }: { userRepository: UserRepository }) {
		// Assign the passed userRepository to the class property
		this.userRepository = userRepository
	}

	/**
	 * @method run
	 * @description Refreshes an access token using the payload from a validated refresh token.
	 * This process involves verifying the user's existence and then generating new tokens.
	 * @param {JwtPayloadUser} jwtToken - The decoded payload of the refresh token.
	 * @returns {Promise<AuthResponseDto>} A promise that resolves to the authentication response with new tokens.
	 * @throws {UserDoesNotExistError} If the user associated with the token does not exist.
	 */
	async run(jwtToken: JwtPayloadUser): Promise<AuthResponseDto> {
		const id = new UserId(jwtToken.sub).value

		const user = (await this.userRepository.searchById(id)) as UserPrimitives & {
			role: RolePrimitives
			employee: EmployeePrimitives
		}

		if (
			!user ||
			user.status !== UserStatusEnum.ACTIVE ||
			!user.employee ||
			user.employee.type !== EmployeeTypesEnum.SERVICE ||
			!user.employee.isStillWorking
		) {
			throw new UserDoesNotExistError(id)
		}

		// Generate new tokens
		const newRefreshToken = generateRefreshToken(user)
		const accessToken = generateAccessToken(user)
		const authResponse = buildAuthResponse(user, accessToken, newRefreshToken)

		return authResponse
	}
}
