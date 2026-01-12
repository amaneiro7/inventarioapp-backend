import { LocationCreatedDomainEvent } from '../domain/event/LocationCreatedDomainEvent'
import { LocationUpdatedDomainEvent } from '../domain/event/LocationUpdatedDomainEvent'
import { CityUpdatedDomainEvent } from '../../City/domain/event/CityUpdatedDomainEvent'
import { SiteUpdatedDomainEvent } from '../../Site/domain/event/SiteUpdatedDomainEvent'
import { RegionUpdatedDomainEvent } from '../../Region/domain/events/RegionUpdatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type CacheInvalidator } from '../../../Shared/domain/repository/CacheInvalidator'

export class InvalidateLocationCacheOnLocationChanged implements DomainEventSubscriber<
	| LocationCreatedDomainEvent
	| LocationUpdatedDomainEvent
	| SiteUpdatedDomainEvent
	| CityUpdatedDomainEvent
	| RegionUpdatedDomainEvent
> {
	private readonly invalidator: CacheInvalidator

	constructor({ locationRepository }: { locationRepository: CacheInvalidator }) {
		this.invalidator = locationRepository
	}

	async on(
		event:
			| LocationCreatedDomainEvent
			| LocationUpdatedDomainEvent
			| SiteUpdatedDomainEvent
			| CityUpdatedDomainEvent
			| RegionUpdatedDomainEvent
	): Promise<void> {
		if (event instanceof LocationUpdatedDomainEvent) {
			const { changes } = event
			const name = changes.find(change => change.field === 'name')?.oldValue as string
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId,
				name
			})
		} else if (event instanceof LocationCreatedDomainEvent) {
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
		return [
			LocationCreatedDomainEvent,
			LocationUpdatedDomainEvent,
			SiteUpdatedDomainEvent,
			CityUpdatedDomainEvent,
			RegionUpdatedDomainEvent
		]
	}
}
