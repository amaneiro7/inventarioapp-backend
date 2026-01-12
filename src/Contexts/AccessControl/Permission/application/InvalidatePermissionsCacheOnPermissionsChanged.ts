import { PermissionCacheInvalidator } from '../domain/repository/PermissionCacheInvalidator'
import { PermissionCreatedDomainEvent } from '../domain/event/PermissionCreatedDomainEvent'
import { PermissionRemovedDomainEvent } from '../domain/event/PermissionRemovedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'

export class InvalidatePermissionCacheOnPermissionChanged implements DomainEventSubscriber<
	PermissionCreatedDomainEvent | PermissionRemovedDomainEvent
> {
	private readonly invalidator: PermissionCacheInvalidator

	constructor({ permissionRepository }: { permissionRepository: PermissionCacheInvalidator }) {
		this.invalidator = permissionRepository
	}

	async on(event: PermissionCreatedDomainEvent | PermissionRemovedDomainEvent): Promise<void> {
		if (event instanceof PermissionCreatedDomainEvent) {
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId,
				name: event.name
			})
		} else {
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId
			})
		}
	}

	subscribedTo(): DomainEventClass[] {
		return [PermissionCreatedDomainEvent, PermissionRemovedDomainEvent]
	}
}
