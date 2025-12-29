import { SiteCreatedDomainEvent } from '../domain/event/SiteCreatedDomainEvent'
import { SiteUpdatedDomainEvent } from '../domain/event/SiteUpdatedDomainEvent'
import { RegionUpdatedDomainEvent } from '../../Region/domain/events/RegionUpdatedDomainEvent'
import { CityUpdatedDomainEvent } from '../../City/domain/event/CityUpdatedDomainEvent'
import { CityCreatedDomainEvent } from '../../City/domain/event/CityCreatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type SiteCacheInvalidator } from '../domain/repository/SiteCacheInvalidator'

export class InvalidateSiteCacheOnSiteChanged implements DomainEventSubscriber<
	| SiteCreatedDomainEvent
	| SiteUpdatedDomainEvent
	| CityCreatedDomainEvent
	| CityUpdatedDomainEvent
	| RegionUpdatedDomainEvent
> {
	private readonly invalidator: SiteCacheInvalidator

	constructor({ siteRepository }: { siteRepository: SiteCacheInvalidator }) {
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
		const isSiteEvent = event instanceof SiteCreatedDomainEvent || event instanceof SiteUpdatedDomainEvent
		await this.invalidator.invalidate(isSiteEvent ? event.aggregateId : undefined)
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
