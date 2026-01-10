import { User } from '../../User/user/domain/entity/User'
import { UserId } from '../../User/user/domain/valueObject/UserId'
import {
	generateAccessToken,
	generateChangePasswordToken,
	generateRefreshToken,
	type JwtPayloadUser
} from '../domain/service/GenerateToken'
import { buildAuthResponse } from '../domain/service/buildAuthResponse'
import { UserDoesNotExistError } from '../../User/user/domain/Errors/UserDoesNotExistError'
import { EmployeeTypesEnum } from '../../employee/Employee/domain/valueObject/EmployeeType'
import { UserStatusEnum } from '../../User/user/domain/valueObject/UserStatus'
import { PasswordExpiredError } from '../domain/error/PasswordExpiredError'
import { SettingsFinder } from '../../AppSettings/application/SettingsFinder'
import { AppSettingDefaults, AppSettingKeys } from '../../AppSettings/domain/entity/SettingsKeys'
import { type UserRepository } from '../../User/user/domain/Repository/UserRepository'
import { type AuthResponseDto } from '../domain/entity/Auth.dto'

/**
 * @class AuthRefreshTokenUseCase
 * @description Use case for refreshing access tokens. It enhances security by ensuring that the user
 * associated with the refresh token exists and is active. It generates a new set of access and
 * refresh tokens upon successful validation.
 */
export class AuthRefreshTokenUseCase {
	// Declare userRepository as a class property
	private readonly userRepository: UserRepository
	private readonly settingsFinder: SettingsFinder
	constructor({
		userRepository,
		settingsFinder
	}: {
		userRepository: UserRepository
		settingsFinder: SettingsFinder
	}) {
		// Assign the passed userRepository to the class property
		this.userRepository = userRepository
		this.settingsFinder = settingsFinder
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

		const user = await this.userRepository.findById(id)

		if (
			!user ||
			user.status !== UserStatusEnum.ACTIVE ||
			!user.employee ||
			user.employee.type !== EmployeeTypesEnum.SERVICE ||
			!user.employee.isStillWorking
		) {
			throw new UserDoesNotExistError(id)
		}

		const userEntity = User.fromPrimitives(user)
		const daysToExpire = await this.settingsFinder.findAsNumber({
			key: AppSettingKeys.SECURITY.PASSWORD_EXPIRY_DAYS,
			fallback: AppSettingDefaults.SECURITY.PASSWORD_EXPIRY_DAYS
		})

		if (userEntity.isPasswordExpired(daysToExpire)) {
			// La contraseña ha expirado durante la sesión.
			const temporaryToken = generateChangePasswordToken(user)
			throw new PasswordExpiredError(temporaryToken)
		}

		// Generate new tokens
		const newRefreshToken = generateRefreshToken(user)
		const accessToken = generateAccessToken(user)
		const authResponse = buildAuthResponse({ user, accessToken, refreshToken: newRefreshToken })

		return authResponse
	}
}
