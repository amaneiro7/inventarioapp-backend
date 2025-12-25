import { SiteCreatedDomainEvent } from '../domain/event/SiteCreatedDomainEvent'
import { SiteUpdatedDomainEvent } from '../domain/event/SiteUpdatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type SiteCacheInvalidator } from '../domain/repository/SiteCacheInvalidator'

export class InvalidateSiteCacheOnSiteChanged implements DomainEventSubscriber<
	SiteCreatedDomainEvent | SiteUpdatedDomainEvent
> {
	private readonly invalidator: SiteCacheInvalidator

	constructor({ siteRepository }: { siteRepository: SiteCacheInvalidator }) {
		this.invalidator = siteRepository
	}

	async on(event: SiteCreatedDomainEvent | SiteUpdatedDomainEvent): Promise<void> {
		await this.invalidator.invalidateSiteCache(event.aggregateId)
	}

	subscribedTo(): DomainEventClass[] {
		return [SiteCreatedDomainEvent, SiteUpdatedDomainEvent]
	}
}
