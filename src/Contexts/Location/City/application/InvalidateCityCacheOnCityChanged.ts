import { CityCreatedDomainEvent } from '../domain/event/CityCreatedDomainEvent'
import { CityUpdatedDomainEvent } from '../domain/event/CityUpdatedDomainEvent'
import { RegionUpdatedDomainEvent } from '../../Region/domain/events/RegionUpdatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type CityCacheInvalidator } from '../domain/repository/CityCacheInvalidator'

export class InvalidateCityCacheOnCityChanged implements DomainEventSubscriber<
	CityCreatedDomainEvent | CityUpdatedDomainEvent | RegionUpdatedDomainEvent
> {
	private readonly invalidator: CityCacheInvalidator

	constructor({ cityRepository }: { cityRepository: CityCacheInvalidator }) {
		this.invalidator = cityRepository
	}

	async on(event: CityCreatedDomainEvent | CityUpdatedDomainEvent | RegionUpdatedDomainEvent): Promise<void> {
		const isCityEvent = event instanceof CityCreatedDomainEvent || event instanceof CityUpdatedDomainEvent
		await this.invalidator.invalidate(isCityEvent ? event.aggregateId : undefined)
	}

	subscribedTo(): DomainEventClass[] {
		return [CityCreatedDomainEvent, CityUpdatedDomainEvent, RegionUpdatedDomainEvent]
	}
}
