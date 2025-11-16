import { PermissionGroup } from '../domain/entity/PermissionGroup'
import { PermissionGroupDoesNotExistError } from '../domain/errors/PermissionGroupDoesNotExistError'
import { PermissionGroupId } from '../domain/valueObject/PermissionGroupId'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type PermissionGroupRepository } from '../domain/repository/PermissionGroupRepository'

/**
 * @description Use case for removing a PermissionGroup entity.
 */
export class PermissionGroupRemover {
	private readonly permissionGroupRepository: PermissionGroupRepository
	private readonly eventBus: EventBus
	constructor({
		permissionGroupRepository,
		eventBus
	}: {
		permissionGroupRepository: PermissionGroupRepository
		eventBus: EventBus
	}) {
		this.permissionGroupRepository = permissionGroupRepository
		this.eventBus = eventBus
	}
	/**
	 * @description Executes the permissionGroup removal process.
	 * @param {{ id: Primitives<PermissionGroupId> }} params The parameters for removing the permissionGroup.
	 * @returns {Promise<void>} A promise that resolves when the permissionGroup is successfully removed.
	 * @throws {PermissionGroupDoesNotExistError} If no permissionGroup with the provided ID is found.
	 */
	async run({ id }: { id: Primitives<PermissionGroupId> }): Promise<void> {
		const permissionGroupId = new PermissionGroupId(id)

		const permissionGroup = await this.permissionGroupRepository.findById(permissionGroupId.value)

		if (permissionGroup === null) {
			throw new PermissionGroupDoesNotExistError(id)
		}

		const permissionGroupEntity = PermissionGroup.fromPrimitives(permissionGroup)
		permissionGroupEntity.remove()

		await this.permissionGroupRepository.remove(permissionGroupId.value)
		await this.eventBus.publish(permissionGroupEntity.pullDomainEvents())
	}
}
