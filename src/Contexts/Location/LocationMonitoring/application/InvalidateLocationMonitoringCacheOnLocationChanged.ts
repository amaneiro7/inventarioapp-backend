import { LocationSubnetChangedDomainEvent } from '../../Location/domain/event/LocationSubnetChangedDomainEvent'
import { LocationStatusChangedDomainEvent } from '../../Location/domain/event/LocationStatusChangedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type LocationMonitoringService } from './LocationMonitoringService'

export class InvalidateLocationMonitoringCacheOnLocationChanged implements DomainEventSubscriber<
	LocationStatusChangedDomainEvent | LocationSubnetChangedDomainEvent
> {
	private readonly service: LocationMonitoringService

	constructor({ locationMonitoringService }: { locationMonitoringService: LocationMonitoringService }) {
		this.service = locationMonitoringService
	}

	async on(event: LocationStatusChangedDomainEvent | LocationSubnetChangedDomainEvent): Promise<void> {
		await this.service.invalidateActiveIpList()
		await this.service.syncFromLocationChange(event.aggregateId)
	}

	subscribedTo(): DomainEventClass[] {
		return [LocationStatusChangedDomainEvent, LocationSubnetChangedDomainEvent]
	}
}
