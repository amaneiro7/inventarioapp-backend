import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type ShipmentCreatedDomainEventAttributes = {
	readonly shipmentCode: string
	readonly origin: string
	readonly destination: string
	readonly status: string
	readonly sentBy: string
}

export class ShipmentCreatedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'shipment.created'

	readonly shipmentCode: string
	readonly origin: string
	readonly destination: string
	readonly status: string
	readonly sentBy: string

	constructor({
		aggregateId,
		shipmentCode,
		origin,
		destination,
		status,
		sentBy,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		eventId?: string
		occurredOn?: Date
	} & ShipmentCreatedDomainEventAttributes) {
		super({ eventName: ShipmentCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.shipmentCode = shipmentCode
		this.origin = origin
		this.destination = destination
		this.status = status
		this.sentBy = sentBy
	}

	toPrimitives(): ShipmentCreatedDomainEventAttributes {
		const { shipmentCode, origin, destination, status, sentBy } = this
		return {
			shipmentCode,
			origin,
			destination,
			status,
			sentBy
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: ShipmentCreatedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, occurredOn, eventId } = params
		return new ShipmentCreatedDomainEvent({
			aggregateId,
			...attributes,
			eventId,
			occurredOn
		})
	}
}
