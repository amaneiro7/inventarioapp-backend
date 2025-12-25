import { LocationCreatedDomainEvent } from '../domain/event/LocationCreatedDomainEvent'
import { LocationUpdatedDomainEvent } from '../domain/event/LocationUpdatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type LocationCacheInvalidator } from '../domain/repository/LocationCacheInvalidator'

export class InvalidateLocationCacheOnLocationChanged implements DomainEventSubscriber<
	LocationCreatedDomainEvent | LocationUpdatedDomainEvent
> {
	private readonly invalidator: LocationCacheInvalidator

	constructor({ locationRepository }: { locationRepository: LocationCacheInvalidator }) {
		this.invalidator = locationRepository
	}

	async on(event: LocationCreatedDomainEvent | LocationUpdatedDomainEvent): Promise<void> {
		await this.invalidator.invalidateLocationCache(event.aggregateId)
	}

	subscribedTo(): DomainEventClass[] {
		return [LocationCreatedDomainEvent, LocationUpdatedDomainEvent]
	}
}
