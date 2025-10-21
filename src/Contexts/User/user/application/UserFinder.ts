import { UserId } from '../domain/UserId'
import { UserDoesNotExistError } from '../domain/Errors/UserDoesNotExistError'
import { isSuperAdmin } from '../../Role/application/isSuperAdmin'
import { RoleId } from '../../Role/domain/RoleId'
import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives' // Corrected path for Primitives
import { type UserPrimitivesOptional } from '../domain/User.dto' // Use User.dto
import { type UserRepository } from '../domain/Repository/UserRepository'

/**
 * @description Use case for finding a user by their ID.
 */
export class UserFinder {
	private readonly userRepository: UserRepository

	constructor({ userRepository }: { userRepository: UserRepository }) {
		this.userRepository = userRepository
	}

	/**
	 * @description Executes the user finding process by ID.
	 * @param {{ id: Primitives<UserId>; user?: JwtPayloadUser }} params The parameters for finding the user.
	 * @returns {Promise<Omit<UserPrimitives, 'password'>>} A promise that resolves to the found user's primitive data (excluding password).
	 * @throws {UserDoesNotExistError} If the user is not found or if the user is an admin (to prevent exposing admin data).
	 * @throws {InvalidArgumentError} If the calling user does not have super admin privileges.
	 */
	async run({ id, user }: { user?: JwtPayloadUser; id: Primitives<UserId> }): Promise<UserPrimitivesOptional> {
		// Return UserPrimitivesOptional
		isSuperAdmin({ user })

		const userId = new UserId(id).value
		const foundUser = await this.userRepository.searchById(userId)

		if (!foundUser) {
			throw new UserDoesNotExistError(userId)
		} // Use userId for the error

		if (`${foundUser.roleId}` === `${RoleId.Options.ADMIN}`) {
			throw new UserDoesNotExistError('Usuario no encontrado.') // Generic error to hide admin existence
		}

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { password, ...rest } = foundUser
		return {
			...rest,
			roleId: `${rest.roleId}`
		}
	}
}
