import { CityCreatedDomainEvent } from '../domain/event/CityCreatedDomainEvent'
import { CityUpdatedDomainEvent } from '../domain/event/CityUpdatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type CityCacheInvalidator } from '../domain/repository/CityCacheInvalidator'

export class InvalidateCityCacheOnCityChanged implements DomainEventSubscriber<
	CityCreatedDomainEvent | CityUpdatedDomainEvent
> {
	private readonly invalidator: CityCacheInvalidator

	constructor({ cityRepository }: { cityRepository: CityCacheInvalidator }) {
		this.invalidator = cityRepository
	}

	async on(event: CityCreatedDomainEvent | CityUpdatedDomainEvent): Promise<void> {
		await this.invalidator.invalidateCityCache(event.aggregateId)
	}

	subscribedTo(): DomainEventClass[] {
		return [CityCreatedDomainEvent, CityUpdatedDomainEvent]
	}
}
