import { PermissionCacheInvalidator } from '../domain/repository/PermissionCacheInvalidator'
import { PermissionCreatedDomainEvent } from '../domain/event/PermissionCreatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'

export class InvalidatePermissionCacheOnPermissionChanged implements DomainEventSubscriber<PermissionCreatedDomainEvent> {
	private readonly invalidator: PermissionCacheInvalidator

	constructor({ permissionRepository }: { permissionRepository: PermissionCacheInvalidator }) {
		this.invalidator = permissionRepository
	}

	async on(event: PermissionCreatedDomainEvent): Promise<void> {
		const isPermissionEvent = event instanceof PermissionCreatedDomainEvent

		// Si es Permission, invalidamos específico
		await this.invalidator.invalidate(isPermissionEvent ? event.aggregateId : undefined)
	}

	subscribedTo(): DomainEventClass[] {
		return [PermissionCreatedDomainEvent]
	}
}
