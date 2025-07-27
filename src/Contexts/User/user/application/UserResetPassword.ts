import { User } from '../domain/User'
import { UserId } from '../domain/UserId'
import { UserPassword } from '../domain/UserPassword'
import { isSuperAdmin } from '../../Role/application/isSuperAdmin'
import { UserDoesNotExistError } from '../domain/UserDoesNotExistError'
import { type UserRepository } from '../domain/UserRepository'
import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

/**
 * @description Use case for resetting a user's password to a default value.
 */
export class UserResetPassword {
	private readonly userRepository: UserRepository

	constructor({ userRepository }: { userRepository: UserRepository }) {
		this.userRepository = userRepository
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
			throw new UserDoesNotExistError(id)
		}

		const userEntity = User.fromPrimitives(userToResetPassword)
		const newPassword = UserPassword.defaultPassword
		userEntity.updatePassword(newPassword)

		await this.userRepository.save(userEntity.toPrimitives())
	}
}
