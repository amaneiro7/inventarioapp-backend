import { LocationCreatedDomainEvent } from '../domain/event/LocationCreatedDomainEvent'
import { LocationUpdatedDomainEvent } from '../domain/event/LocationUpdatedDomainEvent'
import { CityUpdatedDomainEvent } from '../../City/domain/event/CityUpdatedDomainEvent'
import { SiteUpdatedDomainEvent } from '../../Site/domain/event/SiteUpdatedDomainEvent'
import { RegionUpdatedDomainEvent } from '../../Region/domain/events/RegionUpdatedDomainEvent'
import { SiteCreatedDomainEvent } from '../../Site/domain/event/SiteCreatedDomainEvent'
import { CityCreatedDomainEvent } from '../../City/domain/event/CityCreatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type LocationCacheInvalidator } from '../domain/repository/LocationCacheInvalidator'

export class InvalidateLocationCacheOnLocationChanged implements DomainEventSubscriber<
	| LocationCreatedDomainEvent
	| LocationUpdatedDomainEvent
	| SiteCreatedDomainEvent
	| SiteUpdatedDomainEvent
	| CityCreatedDomainEvent
	| CityUpdatedDomainEvent
	| RegionUpdatedDomainEvent
> {
	private readonly invalidator: LocationCacheInvalidator

	constructor({ locationRepository }: { locationRepository: LocationCacheInvalidator }) {
		this.invalidator = locationRepository
	}

	async on(
		event:
			| LocationCreatedDomainEvent
			| LocationUpdatedDomainEvent
			| SiteCreatedDomainEvent
			| SiteUpdatedDomainEvent
			| CityCreatedDomainEvent
			| CityUpdatedDomainEvent
			| RegionUpdatedDomainEvent
	): Promise<void> {
		const isLocationEvent =
			event instanceof LocationCreatedDomainEvent || event instanceof LocationUpdatedDomainEvent

		// Si es Location, invalidamos específico. Si es City/Site, invalidamos todo (undefined).
		await this.invalidator.invalidate(isLocationEvent ? event.aggregateId : undefined)
	}

	subscribedTo(): DomainEventClass[] {
		return [
			LocationCreatedDomainEvent,
			LocationUpdatedDomainEvent,
			SiteCreatedDomainEvent,
			SiteUpdatedDomainEvent,
			CityCreatedDomainEvent,
			CityUpdatedDomainEvent,
			RegionUpdatedDomainEvent
		]
	}
}
