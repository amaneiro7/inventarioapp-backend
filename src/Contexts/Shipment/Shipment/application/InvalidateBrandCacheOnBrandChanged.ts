import { ShipmentCancelledDomainEvent } from '../domain/event/ShipmentCancelledDomainEvent'
import { ShipmentCreatedDomainEvent } from '../domain/event/ShipmentCreatedDomainEvent'
import { ShipmentDeliveredDomainEvent } from '../domain/event/ShipmentDeliveredDomainEvent'
import { ShipmentStatusChangedDomainEvent } from '../domain/event/ShipmentStatusChangedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type CacheInvalidator } from '../../../Shared/domain/repository/CacheInvalidator'

export class InvalidateShipmentCacheOnShipmentChanged implements DomainEventSubscriber<
	| ShipmentCancelledDomainEvent
	| ShipmentCreatedDomainEvent
	| ShipmentDeliveredDomainEvent
	| ShipmentStatusChangedDomainEvent
> {
	private readonly invalidator: CacheInvalidator

	constructor({ shipmentRepository }: { shipmentRepository: CacheInvalidator }) {
		this.invalidator = shipmentRepository
	}

	async on(
		event:
			| ShipmentCancelledDomainEvent
			| ShipmentCreatedDomainEvent
			| ShipmentDeliveredDomainEvent
			| ShipmentStatusChangedDomainEvent
	): Promise<void> {
		// Pasamos el ID del agregado que cambió para una invalidación más precisa.
		await this.invalidator.invalidate(event.aggregateId)
	}

	subscribedTo(): DomainEventClass[] {
		return [
			ShipmentCancelledDomainEvent,
			ShipmentCreatedDomainEvent,
			ShipmentDeliveredDomainEvent,
			ShipmentStatusChangedDomainEvent
		]
	}
}
