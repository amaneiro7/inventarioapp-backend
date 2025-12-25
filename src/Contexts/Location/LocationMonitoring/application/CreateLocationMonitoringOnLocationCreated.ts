import { LocationCreatedDomainEvent } from '../../Location/domain/event/LocationCreatedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type LocationMonitoringCreator } from './LocationMonitoringCreator'

export class CreateLocationMonitoringOnLocationCreated implements DomainEventSubscriber<LocationCreatedDomainEvent> {
	private readonly creator: LocationMonitoringCreator
	constructor({ locationMonitoringCreator }: { locationMonitoringCreator: LocationMonitoringCreator }) {
		this.creator = locationMonitoringCreator
	}

	async on(event: LocationCreatedDomainEvent): Promise<void> {
		const locationId = event.aggregateId
		await this.creator.run({ locationId })
	}

	subscribedTo(): DomainEventClass[] {
		return [LocationCreatedDomainEvent]
	}
}
