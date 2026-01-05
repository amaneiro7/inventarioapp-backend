import { User } from '../domain/entity/User'
import { UserId } from '../domain/valueObject/UserId'
import { UserDoesNotExistError } from '../domain/Errors/UserDoesNotExistError'
import { RoleExistenceChecker } from '../../Role/domain/service/RoleExistanceChecker'
import { type UserRepository } from '../domain/Repository/UserRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type RoleRepository } from '../../Role/domain/repository/RoleRepository'
import { type UserParams } from '../domain/entity/User.dto'
import { type EventBus } from '../../../Shared/domain/event/EventBus'

export class UserUpdater {
	private readonly userRepository: UserRepository
	private readonly roleExistenceChecker: RoleExistenceChecker
	private readonly eventBus: EventBus
	constructor({
		userRepository,
		roleRepository,
		eventBus
	}: {
		userRepository: UserRepository
		roleRepository: RoleRepository
		eventBus: EventBus
	}) {
		this.userRepository = userRepository
		this.roleExistenceChecker = new RoleExistenceChecker(roleRepository)
		this.eventBus = eventBus
	}

	async run({ id, params }: { id: Primitives<UserId>; params: Partial<UserParams> }): Promise<void> {
		const userId = new UserId(id)
		const user = await this.userRepository.findById(userId.value)

		if (!user) {
			throw new UserDoesNotExistError(id)
		}

		const userEntity = User.fromPrimitives(user)

		let hasChanges = false

		if (params.roleId !== undefined && String(userEntity.roleValue) !== String(params.roleId)) {
			await this.roleExistenceChecker.ensureExist(Number(params.roleId))
			userEntity.updateRole(Number(params.roleId))
			hasChanges = true
		}
		// Save the updated entity only if it has changed
		if (hasChanges) {
			await this.userRepository.save(userEntity.toPrimitives())
			await this.eventBus.publish(userEntity.pullDomainEvents())
		}
	}
}
