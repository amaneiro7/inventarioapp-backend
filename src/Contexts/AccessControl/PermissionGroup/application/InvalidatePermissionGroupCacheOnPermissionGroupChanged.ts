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
		if (event instanceof PermissionGroupUpdatedDomainEvent) {
			const { changes } = event
			const name = changes.find(change => change.field === 'name')?.oldValue as string
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId,
				name
			})
		} else if (event instanceof PermissionGroupCreatedDomainEvent) {
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId,
				name: event.body.name
			})
		} else {
			await this.invalidator.invalidate()
		}
	}

	subscribedTo(): DomainEventClass[] {
		return [PermissionGroupCreatedDomainEvent, PermissionGroupUpdatedDomainEvent]
	}
}
