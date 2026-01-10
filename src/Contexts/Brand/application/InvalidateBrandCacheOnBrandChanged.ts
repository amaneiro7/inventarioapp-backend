import { BrandCategoryAddedDomainEvent } from '../domain/event/BrandCategoryAddedDomainEvent'
import { BrandCategoryRemovedDomainEvent } from '../domain/event/BrandCategoryRemovedDomainEvent'
import { BrandCreatedDomainEvent } from '../domain/event/BrandCreatedDomainEvent'
import { BrandRemovedDomainEvent } from '../domain/event/BrandRemovedDomainEvent'
import { BrandRenamedDomainEvent } from '../domain/event/BrandRenamedDomainEvent'
import { BrandUpdatedDomainEvent } from '../domain/event/BrandUpdatedDomainEvent'
import { type DomainEventClass } from '../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../Shared/domain/event/DomainEventSubscriber'
import { type BrandCacheInvalidator } from '../domain/repository/BrandCacheInvalidator'

export class InvalidateBrandCacheOnBrandChanged implements DomainEventSubscriber<
	| BrandCreatedDomainEvent
	| BrandRenamedDomainEvent
	| BrandRemovedDomainEvent
	| BrandUpdatedDomainEvent
	| BrandCategoryAddedDomainEvent
	| BrandCategoryRemovedDomainEvent
> {
	private readonly invalidator: BrandCacheInvalidator

	constructor({ brandRepository }: { brandRepository: BrandCacheInvalidator }) {
		this.invalidator = brandRepository
	}

	async on(
		event:
			| BrandCreatedDomainEvent
			| BrandRenamedDomainEvent
			| BrandRemovedDomainEvent
			| BrandUpdatedDomainEvent
			| BrandCategoryAddedDomainEvent
			| BrandCategoryRemovedDomainEvent
	): Promise<void> {
		await this.invalidator.invalidate(event.aggregateId)
	}

	subscribedTo(): DomainEventClass[] {
		return [
			BrandCreatedDomainEvent,
			BrandRenamedDomainEvent,
			BrandRemovedDomainEvent,
			BrandUpdatedDomainEvent,
			BrandCategoryAddedDomainEvent,
			BrandCategoryRemovedDomainEvent
		]
	}
}
