import { UserDoesNotExistError } from '../domain/UserDoesNotExistError'
import { isSuperAdmin } from '../../Role/application/isSuperAdmin'
import { RoleId } from '../../Role/domain/RoleId'
import { UserEmail } from '../domain/UserEmail'
import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type UserPrimitives } from '../domain/User'
import { type UserRepository } from '../domain/UserRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

/**
 * @description Use case for finding a user by their email address.
 */
export class UserFinderByEmail {
	private readonly userRepository: UserRepository

	constructor({ userRepository }: { userRepository: UserRepository }) {
		this.userRepository = userRepository
	}

	/**
	 * @description Executes the user finding process by email.
	 * @param {{ user?: JwtPayloadUser; email: Primitives<UserEmail> }} params The parameters for finding the user.
	 * @returns {Promise<Omit<UserPrimitives, 'password'>>} A promise that resolves to the found user's primitive data (excluding password).
	 * @throws {UserDoesNotExistError} If the user is not found or if the user is an admin (to prevent exposing admin data).
	 * @throws {InvalidArgumentError} If the calling user does not have super admin privileges.
	 */
	async run({
		user,
		email
	}: {
		user?: JwtPayloadUser
		email: Primitives<UserEmail>
	}): Promise<Omit<UserPrimitives, 'password'>> {
		isSuperAdmin({ user })

		const userEmail = new UserEmail(email)
		const foundUser = await this.userRepository.searchByEmail(userEmail.value)

		if (!foundUser) {
			throw new UserDoesNotExistError(userEmail.value)
		}

		if (foundUser.roleId === RoleId.Options.ADMIN) {
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
