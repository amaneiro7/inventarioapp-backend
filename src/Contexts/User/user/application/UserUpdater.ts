import { User } from '../domain/entity/User'
import { UserId } from '../domain/valueObject/UserId'
import { RoleId } from '../../Role/domain/RoleId'
import { UserDoesNotExistError } from '../domain/Errors/UserDoesNotExistError'
import { RoleDoesNotExistError } from '../../Role/domain/RoleDoesNotExistError'
import { type UserRepository } from '../domain/Repository/UserRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type RoleRepository } from '../../Role/domain/RoleRepository'
import { type UserParams } from '../domain/entity/User.dto'

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

	async run({ id, params }: { id: Primitives<UserId>; params: Partial<UserParams> }): Promise<void> {
		const userId = new UserId(id)
		const user = await this.userRepository.searchById(userId.value)

		if (!user) {
			throw new UserDoesNotExistError(id)
		}

		const userEntity = User.fromPrimitives(user)

		let hasChanges = false

		if (params.roleId !== undefined && userEntity.roleValue !== params.roleId) {
			await this.ensureRoleExist({ repository: this.roleRepository, roleId: params.roleId })
			userEntity.updateRole(params.roleId)
			hasChanges = true
		}
		// Save the updated entity only if it has changed
		if (hasChanges) {
			await this.userRepository.save(userEntity.toPrimitives())
		}
	}

	private async ensureRoleExist({
		repository,
		roleId
	}: {
		repository: RoleRepository
		roleId: Primitives<RoleId>
	}): Promise<void> {
		const existingRole = await repository.searchById(new RoleId(roleId).value)
		if (!existingRole) {
			throw new RoleDoesNotExistError()
		}
	}
}
