import { PermissionGroupCreatedDomainEvent } from '../domain/event/PermissionGroupCreatedDomainEvent'
import { PermissionGroupUpdatedDomainEvent } from '../domain/event/PermissionGroupUpdatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type CacheInvalidator } from '../../../Shared/domain/repository/CacheInvalidator'

export class InvalidatePermissionGroupCacheOnPermissionGroupChanged implements DomainEventSubscriber<
	PermissionGroupCreatedDomainEvent | PermissionGroupUpdatedDomainEvent
> {
	private readonly invalidator: CacheInvalidator

	constructor({ permissionRepository }: { permissionRepository: CacheInvalidator }) {
		this.invalidator = permissionRepository
	}

	async on(event: PermissionGroupCreatedDomainEvent | PermissionGroupUpdatedDomainEvent): Promise<void> {
		const isPermissionGroupEvent =
			event instanceof PermissionGroupCreatedDomainEvent || event instanceof PermissionGroupUpdatedDomainEvent

		// Si es PermissionGroup, invalidamos específico
		await this.invalidator.invalidate(isPermissionGroupEvent ? event.aggregateId : undefined)
	}

	subscribedTo(): DomainEventClass[] {
		return [PermissionGroupCreatedDomainEvent]
	}
}
