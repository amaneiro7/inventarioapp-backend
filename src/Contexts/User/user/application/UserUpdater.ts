import { isSuperAdmin } from '../../Role/application/isSuperAdmin'
import { User, type UserPrimitives } from '../domain/User'
import { UserDoesNotExistError } from '../domain/UserDoesNotExistError'
import { UserId } from '../domain/UserId'
import { UserEmail } from '../domain/UserEmail'
import { UserLastName } from '../domain/UserLastName'
import { UserName } from '../domain/UserName'
import { UserRole } from '../domain/UserRole'
import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type RoleRepository } from '../../Role/domain/RoleRepository'
import { type UserRepository } from '../domain/UserRepository'

type Payload = Omit<UserPrimitives, 'id' | 'password'>

/**
 * @description Use case for updating an existing user's information.
 */
export class UserUpdater {
	private readonly userRepository: UserRepository
	private readonly roleRepository: RoleRepository

	constructor({
		userRepository,
		roleRepository
	}: {
		userRepository: UserRepository
		roleRepository: RoleRepository
	}) {
		this.userRepository = userRepository
		this.roleRepository = roleRepository
	}

	/**
	 * @description Executes the user update process.
	 * @param {{ user?: JwtPayloadUser; id: string; payload: Partial<Payload> }} params The parameters for updating the user.
	 * @returns {Promise<void>} A promise that resolves when the user is successfully updated.
	 * @throws {InvalidArgumentError} If the calling user does not have super admin privileges.
	 * @throws {UserDoesNotExistError} If the user to be updated does not exist.
	 */
	async run({ user, id, payload }: { user?: JwtPayloadUser; id: string; payload: Partial<Payload> }): Promise<void> {
		isSuperAdmin({ user })

		const userId = new UserId(id).value
		const userToUpdate = await this.userRepository.searchById(userId)

		if (!userToUpdate) {
			throw new UserDoesNotExistError(id)
		}

		const userEntity = User.fromPrimitives(userToUpdate)

		await Promise.all([
			UserName.updateNameField({ entity: userEntity, name: payload.name }),
			UserLastName.updateLastNameField({ entity: userEntity, lastName: payload.lastName }),
			UserEmail.updateEmailField({ repository: this.userRepository, entity: userEntity, email: payload.email }),
			UserRole.updateStatusField({ repository: this.roleRepository, entity: userEntity, role: payload.roleId })
		])

		await this.userRepository.save(userEntity.toPrimitives())
	}
}
