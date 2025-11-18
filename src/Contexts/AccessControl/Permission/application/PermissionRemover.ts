import { Permission } from '../domain/entity/Permission'
import { PermissionDoesNotExistError } from '../domain/errors/PermissionDoesNotExistError'
import { PermissionId } from '../domain/valueObject/PermissionId'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type PermissionRepository } from '../domain/repository/PermissionRepository'

/**
 * @description Use case for removing a Permission entity.
 */
export class PermissionRemover {
	private readonly permissionRepository: PermissionRepository
	private readonly eventBus: EventBus
	constructor({
		permissionRepository,
		eventBus
	}: {
		permissionRepository: PermissionRepository
		eventBus: EventBus
	}) {
		this.permissionRepository = permissionRepository
		this.eventBus = eventBus
	}
	/**
	 * @description Executes the permission removal process.
	 * @param {{ id: Primitives<PermissionId> }} params The parameters for removing the permission.
	 * @returns {Promise<void>} A promise that resolves when the permission is successfully removed.
	 * @throws {PermissionDoesNotExistError} If no permission with the provided ID is found.
	 */
	async run({ id }: { id: Primitives<PermissionId> }): Promise<void> {
		const permissionId = new PermissionId(id)

		const permission = await this.permissionRepository.findById(permissionId.value)

		if (permission === null) {
			throw new PermissionDoesNotExistError({ permissionId: id })
		}
		const permissionEntity = Permission.fromPrimitives(permission)
		permissionEntity.remove()

		await this.permissionRepository.remove(permissionId.value)
		await this.eventBus.publish(permissionEntity.pullDomainEvents())
	}
}
