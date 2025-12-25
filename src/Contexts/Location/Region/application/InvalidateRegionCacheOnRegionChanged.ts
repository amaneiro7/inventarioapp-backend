import { RegionUpdatedDomainEvent } from '../domain/events/RegionUpdatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type RegionCacheInvalidator } from '../domain/repository/RegionCacheInvalidator'

export class InvalidateRegionCacheOnRegionChanged implements DomainEventSubscriber<RegionUpdatedDomainEvent> {
	private readonly invalidator: RegionCacheInvalidator

	constructor({ regionRepository }: { regionRepository: RegionCacheInvalidator }) {
		this.invalidator = regionRepository
	}

	async on(event: RegionUpdatedDomainEvent): Promise<void> {
		await this.invalidator.invalidateRegionCache(event.aggregateId)
	}

	subscribedTo(): DomainEventClass[] {
		return [RegionUpdatedDomainEvent]
	}
}
