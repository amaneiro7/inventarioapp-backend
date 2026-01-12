import { BrandCreatedDomainEvent } from '../domain/event/BrandCreatedDomainEvent'
import { BrandRemovedDomainEvent } from '../domain/event/BrandRemovedDomainEvent'
import { BrandRenamedDomainEvent } from '../domain/event/BrandRenamedDomainEvent'
import { BrandUpdatedDomainEvent } from '../domain/event/BrandUpdatedDomainEvent'
import { type DomainEventClass } from '../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../Shared/domain/event/DomainEventSubscriber'
import { type CacheInvalidator } from '../../Shared/domain/repository/CacheInvalidator'

export class InvalidateBrandCacheOnBrandChanged implements DomainEventSubscriber<
	BrandCreatedDomainEvent | BrandRenamedDomainEvent | BrandRemovedDomainEvent | BrandUpdatedDomainEvent
> {
	private readonly invalidator: CacheInvalidator

	constructor({ brandRepository }: { brandRepository: CacheInvalidator }) {
		this.invalidator = brandRepository
	}

	async on(
		event: BrandCreatedDomainEvent | BrandRenamedDomainEvent | BrandRemovedDomainEvent | BrandUpdatedDomainEvent
	): Promise<void> {
		if (event instanceof BrandUpdatedDomainEvent) {
			const { changes } = event
			const name = changes.find(change => change.field === 'name')?.oldValue as string
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId,
				name
			})
		} else if (event instanceof BrandCreatedDomainEvent || event instanceof BrandRenamedDomainEvent) {
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId,
				name: event.name
			})
		} else {
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId
			})
		}
	}

	subscribedTo(): DomainEventClass[] {
		return [BrandCreatedDomainEvent, BrandRenamedDomainEvent, BrandRemovedDomainEvent, BrandUpdatedDomainEvent]
	}
}
