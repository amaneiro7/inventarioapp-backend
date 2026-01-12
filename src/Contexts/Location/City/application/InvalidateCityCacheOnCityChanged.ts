import { CityCreatedDomainEvent } from '../domain/event/CityCreatedDomainEvent'
import { CityUpdatedDomainEvent } from '../domain/event/CityUpdatedDomainEvent'
import { RegionUpdatedDomainEvent } from '../../Region/domain/events/RegionUpdatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type CacheInvalidator } from '../../../Shared/domain/repository/CacheInvalidator'

export class InvalidateCityCacheOnCityChanged implements DomainEventSubscriber<
	CityCreatedDomainEvent | CityUpdatedDomainEvent | RegionUpdatedDomainEvent
> {
	private readonly invalidator: CacheInvalidator

	constructor({ cityRepository }: { cityRepository: CacheInvalidator }) {
		this.invalidator = cityRepository
	}

	async on(event: CityCreatedDomainEvent | CityUpdatedDomainEvent | RegionUpdatedDomainEvent): Promise<void> {
		if (event instanceof CityUpdatedDomainEvent) {
			const { changes } = event
			const name = changes.find(change => change.field === 'name')?.oldValue as string
			await this.invalidator.invalidate({
				id: event.aggregateId,
				key: event.aggregateId,
				name
			})
		} else if (event instanceof CityCreatedDomainEvent) {
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
		return [CityCreatedDomainEvent, CityUpdatedDomainEvent, RegionUpdatedDomainEvent]
	}
}
