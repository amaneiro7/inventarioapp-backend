import { isSuperAdmin } from '../../Role/application/isSuperAdmin'
import { User} from '../domain/User'
import { UserDoesNotExistError } from '../domain/Errors/UserDoesNotExistError'
import { UserId } from '../domain/valueObject/UserId'
import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type RoleRepository } from '../../Role/domain/RoleRepository'
import { type UserRepository } from '../domain/Repository/UserRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type RoleId } from '../../Role/domain/RoleId'
import { UserStatusEnum } from '../domain/valueObject/UserStatus'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { UserPrimitives } from '../domain/User.dto'

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
	
	// Define a new type for the update payload, reflecting the new User structure
	type UserUpdatePayload = {
		roleId?: Primitives<RoleId>
		status?: UserStatusEnum
	}
	/**
	 * @description Executes the user update process.
	 * @param {{ user?: JwtPayloadUser; id: string; payload: UserUpdatePayload }} params The parameters for updating the user.
	 * @returns {Promise<void>} A promise that resolves when the user is successfully updated.
	 * @throws {InvalidArgumentError} If the calling user does not have super admin privileges.
	 * @throws {UserDoesNotExistError} If the user to be updated does not exist.
	 */
	async run({ user, id, payload }: { user?: JwtPayloadUser; id: string; payload: UserUpdatePayload }): Promise<void> {
		isSuperAdmin({ user })

		const userId = new UserId(id).value
		const userToUpdate = await this.userRepository.searchById(userId)

		if (!userToUpdate) {
			throw new UserDoesNotExistError(id)
		}

		const userEntity = User.fromPrimitives(userToUpdate)

		let hasChanges = false

		if (payload.roleId !== undefined && userEntity.roleValue !== payload.roleId) {
			const role = await this.roleRepository.searchById(payload.roleId)
			if (!role) {
				throw new InvalidArgumentError(`El rol con ID '${payload.roleId}' no existe.`)
			}
			userEntity.updateRole(payload.roleId)
			hasChanges = true
		}

		if (payload.status !== undefined && userEntity.statusValue !== payload.status) {
			userEntity.updateStatus(payload.status)
			hasChanges = true
		}

		await this.userRepository.save(userEntity.toPrimitives())
	}
}
