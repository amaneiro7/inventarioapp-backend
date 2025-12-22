import { ShipmentCancelledDomainEvent } from '../domain/event/ShipmentCancelledDomainEvent'
import { ShipmentCreatedDomainEvent } from '../domain/event/ShipmentCreatedDomainEvent'
import { ShipmentDeliveredDomainEvent } from '../domain/event/ShipmentDeliveredDomainEvent'
import { ShipmentStatusChangedDomainEvent } from '../domain/event/ShipmentStatusChangedDomainEvent'
import { type DomainEventClass } from '../../../Shared/domain/event/DomainEvent'
import { type DomainEventSubscriber } from '../../../Shared/domain/event/DomainEventSubscriber'
import { type ShipmentCacheInvalidator } from '../domain/repository/ShipmentCacheInvalidator'

export class InvalidateShipmentCacheOnShipmentChanged implements DomainEventSubscriber<
	| ShipmentCancelledDomainEvent
	| ShipmentCreatedDomainEvent
	| ShipmentDeliveredDomainEvent
	| ShipmentStatusChangedDomainEvent
> {
	private readonly invalidator: ShipmentCacheInvalidator

	constructor({ shipmentRepository }: { shipmentRepository: ShipmentCacheInvalidator }) {
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
		await this.invalidator.invalidateShipmentCache(event.aggregateId)
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
