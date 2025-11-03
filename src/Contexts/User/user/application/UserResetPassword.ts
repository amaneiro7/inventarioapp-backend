import { User } from '../domain/entity/User'
import { UserId } from '../domain/valueObject/UserId'
import { isSuperAdmin } from '../../Role/application/isSuperAdmin'
import { UserDoesNotExistError } from '../domain/Errors/UserDoesNotExistError'
import { AppSettingKeys } from '../../../Shared/AppSettings/domain/entity/SettingsKeys'
import { type UserRepository } from '../domain/Repository/UserRepository'
import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type SettingsFinder } from '../../../Shared/AppSettings/application/SettingsFinder'

/**
 * @description Use case for resetting a user's password to a default value.
 */
export class UserResetPassword {
	private readonly userRepository: UserRepository
	private readonly settingsFinder: SettingsFinder

	constructor({
		userRepository,
		settingsFinder
	}: {
		userRepository: UserRepository
		settingsFinder: SettingsFinder
	}) {
		this.userRepository = userRepository
		this.settingsFinder = settingsFinder
	}

	/**
	 * @description Executes the password reset process.
	 * @param {{ id: Primitives<UserId>; user?: JwtPayloadUser }} params The parameters for resetting the password.
	 * @returns {Promise<void>} A promise that resolves when the password is successfully reset.
	 * @throws {InvalidArgumentError} If the calling user does not have super admin privileges.
	 * @throws {UserDoesNotExistError} If the user to reset the password for does not exist.
	 */
	async run({ id, user }: { id: Primitives<UserId>; user?: JwtPayloadUser }): Promise<void> {
		isSuperAdmin({ user })

		const userId = new UserId(id).value
		const userToResetPassword = await this.userRepository.searchById(userId)

		if (!userToResetPassword) {
			throw new UserDoesNotExistError(id) // Use id for the error
		}

		const userEntity = User.fromPrimitives(userToResetPassword)

		const key = AppSettingKeys.SECURITY.DEFAULT_PASSWORD_HASH
		const settings = await this.settingsFinder.run({ key })

		userEntity.resetPasswordFromHash(settings.value as string)

		await this.userRepository.save(userEntity.toPrimitives())
	}
}
