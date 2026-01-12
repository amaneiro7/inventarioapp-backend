import { SiteCreatedDomainEvent } from '../domain/event/SiteCreatedDomainEvent'
import { SiteUpdatedDomainEvent } from '../domain/event/SiteUpdatedDomainEvent'
import { RegionUpdatedDomainEvent } from '../../Region/domain/events/RegionUpdatedDomainEvent'
import { CityUpdatedDomainEvent } from '../../City/domain/event/CityUpdatedDomainEvent'
import { CityCreatedDomainEvent } from '../../City/domain/event/CityCreatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type CacheInvalidator } from '../../../Shared/domain/repository/CacheInvalidator'

export class InvalidateSiteCacheOnSiteChanged implements DomainEventSubscriber<
	| SiteCreatedDomainEvent
	| SiteUpdatedDomainEvent
	| CityCreatedDomainEvent
	| CityUpdatedDomainEvent
	| RegionUpdatedDomainEvent
> {
	private readonly invalidator: CacheInvalidator

	constructor({ siteRepository }: { siteRepository: CacheInvalidator }) {
		this.invalidator = siteRepository
	}

	async on(
		event:
			| SiteCreatedDomainEvent
			| SiteUpdatedDomainEvent
			| CityCreatedDomainEvent
			| CityUpdatedDomainEvent
			| RegionUpdatedDomainEvent
	): Promise<void> {
		if (event instanceof SiteUpdatedDomainEvent) {
			const { changes } = event
			const name = changes.find(change => change.field === 'name')?.oldValue as string
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId,
				name
			})
		} else if (event instanceof SiteCreatedDomainEvent) {
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
			SiteCreatedDomainEvent,
			SiteUpdatedDomainEvent,
			CityCreatedDomainEvent,
			CityUpdatedDomainEvent,
			RegionUpdatedDomainEvent
		]
	}
}
