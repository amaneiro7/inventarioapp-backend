import { PermissionGroup } from '../domain/entity/PermissionGroup'
import { PermissionGroupAlreadyExistsError } from '../domain/errors/PermissionGroupAlreadyExistsError'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { type PermissionGroupRepository } from '../domain/repository/PermissionGroupRepository'
import { type PermissionGroupParams } from '../domain/entity/PermissionGroup.dto'

export class PermissionGroupCreator {
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

	async run(params: PermissionGroupParams): Promise<void> {
		const { name, permissions } = params
		const existingPermissionGroup = await this.permissionGroupRepository.findByName(name)
		if (existingPermissionGroup) {
			throw new PermissionGroupAlreadyExistsError(name)
		}

		// Nota: La validación de que los IDs de permisos existen se podría hacer aquí,
		// pero es más común hacerla en un caso de uso `PermissionGroupUpdater`
		// para mantener la creación lo más simple posible.

		const permissionGroup = PermissionGroup.create({ name, permissions })
		await this.permissionGroupRepository.save(permissionGroup.toPrimitives())
		await this.eventBus.publish(permissionGroup.pullDomainEvents())
	}
}
