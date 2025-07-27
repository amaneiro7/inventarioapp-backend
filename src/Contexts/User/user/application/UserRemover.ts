import { UserId } from '../domain/UserId'
import { isSuperAdmin } from '../../Role/application/isSuperAdmin'
import { UserDoesNotExistError } from '../domain/UserDoesNotExistError'
import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type UserRepository } from '../domain/UserRepository'

/**
 * @description Use case for removing a user.
 */
export class UserRemover {
	private readonly userRepository: UserRepository

	constructor({ userRepository }: { userRepository: UserRepository }) {
		this.userRepository = userRepository
	}

	/**
	 * @description Executes the user removal process.
	 * @param {{ user?: JwtPayloadUser; id: Primitives<UserId> }} params The parameters for removing the user.
	 * @returns {Promise<void>} A promise that resolves when the user is successfully removed.
	 * @throws {InvalidArgumentError} If the calling user does not have super admin privileges.
	 * @throws {UserDoesNotExistError} If the user to be removed does not exist.
	 */
	async run({ user, id }: { user?: JwtPayloadUser; id: Primitives<UserId> }): Promise<void> {
		isSuperAdmin({ user })

		const userId = new UserId(id).value
		const userToDelete = await this.userRepository.searchById(userId)

		if (!userToDelete) {
			throw new UserDoesNotExistError(userId)
		}

		await this.userRepository.delete(id)
	}
}
