import { UserId } from '../domain/valueObject/UserId'
import { isSuperAdmin } from '../../Role/application/isSuperAdmin'
import { User } from '../domain/entity/User'
import { UserDoesNotExistError } from '../domain/Errors/UserDoesNotExistError'
import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type UserRepository } from '../domain/Repository/UserRepository'

/**
 * @description Use case for manually unlocking a user's account.
 * This class allows a super admin to unlock a user account that has been locked
 * (e.g., due to too many failed login attempts) or suspended.
 */
export class UserUnlockAccount {
	private readonly userRepository: UserRepository

	constructor({ userRepository }: { userRepository: UserRepository }) {
		this.userRepository = userRepository
	}

	/**
	 * @description Executes the user unlock process.
	 * 1. Ensures the acting user has super admin privileges.
	 * 2. Finds the user to be unlocked by their ID.
	 * 3. Calls the `unlockAccount` method on the user entity to reset its status.
	 * 4. Persists the changes to the user.
	 * @param {{ user?: JwtPayloadUser; id: Primitives<UserId> }} params The parameters for unlocking the user.
	 * @returns {Promise<void>} A promise that resolves when the user is successfully unlocked.
	 * @throws {InvalidArgumentError} If the calling user does not have super admin privileges.
	 * @throws {UserDoesNotExistError} If the user to be unlocked does not exist.
	 */
	async run({ user, id }: { user?: JwtPayloadUser; id: Primitives<UserId> }): Promise<void> {
		isSuperAdmin({ user })

		// 1. Validate User existence
		const existingUser = await this.userRepository.searchById(id)
		if (!existingUser) {
			throw new UserDoesNotExistError(id)
		}

		const userEntity = User.fromPrimitives(existingUser)

		// Unlock the user account
		userEntity.unlockAccount()
		await this.userRepository.save(userEntity.toPrimitives())
	}
}
