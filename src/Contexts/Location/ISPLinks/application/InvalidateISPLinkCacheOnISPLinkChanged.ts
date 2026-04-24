import { ISPLinkCreatedDomainEvent } from '../domain/event/ISPLinkCreatedDomainEvent'
import { ISPLinkUpdatedDomainEvent } from '../domain/event/ISPLinkUpdatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type CacheInvalidator } from '../../../Shared/domain/repository/CacheInvalidator'

export class InvalidateISPLinkCacheOnISPLinkChanged implements DomainEventSubscriber<
	ISPLinkCreatedDomainEvent | ISPLinkUpdatedDomainEvent
> {
	private readonly invalidator: CacheInvalidator

	constructor({ ispLinkRepository }: { ispLinkRepository: CacheInvalidator }) {
		this.invalidator = ispLinkRepository
	}

	async on(event: ISPLinkCreatedDomainEvent | ISPLinkUpdatedDomainEvent): Promise<void> {
		if (event instanceof ISPLinkUpdatedDomainEvent) {
			const { changes } = event
			const name = changes.find(change => change.field === 'name')?.oldValue as string
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId,
				name
			})
		} else if (event instanceof ISPLinkCreatedDomainEvent) {
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId,
				name: event.name
			})
		} else {
			await this.invalidator.invalidate()
		}
	}

	subscribedTo(): DomainEventClass[] {
		return [ISPLinkCreatedDomainEvent, ISPLinkUpdatedDomainEvent]
	}
}
