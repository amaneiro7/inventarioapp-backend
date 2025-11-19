import { Permission } from '../domain/entity/Permission'
import { PermissionAlreadyExistsError } from '../domain/errors/PermissionAlreadyExistsError'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { type PermissionRepository } from '../domain/repository/PermissionRepository'
import { type PermissionParams } from '../domain/entity/Permission.dto'

export class PermissionCreator {
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

	async run({ name, description }: PermissionParams): Promise<void> {
		const existingPermission = await this.permissionRepository.findByName(name)
		if (existingPermission) {
			throw new PermissionAlreadyExistsError(name)
		}

		const permission = Permission.create({ name, description })
		await this.permissionRepository.save(permission.toPrimitives())
		await this.eventBus.publish(permission.pullDomainEvents())
	}
}
