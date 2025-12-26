import { LocationSubnetChangedDomainEvent } from '../../Location/domain/event/LocationSubnetChangedDomainEvent'
import { LocationStatusChangedDomainEvent } from '../../Location/domain/event/LocationStatusChangedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type LocationMonitoringCacheInvalidator } from '../domain/repository/LocationMonitoringCacheInvalidator'

export class InvalidateLocationMonitoringCacheOnLocationChanged implements DomainEventSubscriber<
	LocationStatusChangedDomainEvent | LocationSubnetChangedDomainEvent
> {
	private readonly invalidator: LocationMonitoringCacheInvalidator

	constructor({
		locationMonitoringRepository
	}: {
		locationMonitoringRepository: LocationMonitoringCacheInvalidator
	}) {
		this.invalidator = locationMonitoringRepository
	}

	async on(event: LocationStatusChangedDomainEvent | LocationSubnetChangedDomainEvent): Promise<void> {
		await this.invalidator.invalidateLocationMonitoringCache(event.aggregateId)
	}

	subscribedTo(): DomainEventClass[] {
		return [LocationStatusChangedDomainEvent, LocationSubnetChangedDomainEvent]
	}
}
