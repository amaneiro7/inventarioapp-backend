import { RegionUpdatedDomainEvent } from '../domain/events/RegionUpdatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type CacheInvalidator } from '../../../Shared/domain/repository/CacheInvalidator'

export class InvalidateRegionCacheOnRegionChanged implements DomainEventSubscriber<RegionUpdatedDomainEvent> {
	private readonly invalidator: CacheInvalidator

	constructor({ regionRepository }: { regionRepository: CacheInvalidator }) {
		this.invalidator = regionRepository
	}

	async on(event: RegionUpdatedDomainEvent): Promise<void> {
		await this.invalidator.invalidate(event.aggregateId)
	}

	subscribedTo(): DomainEventClass[] {
		return [RegionUpdatedDomainEvent]
	}
}
