import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type ShipmentDeliveredDomainEventAttributes = {
	readonly receivedBy: string | null
	readonly deliveryDate: Date | null
}

export class ShipmentDeliveredDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'shipment.delivered'

	readonly receivedBy: string | null
	readonly deliveryDate: Date | null

	constructor({
		aggregateId,
		receivedBy,
		deliveryDate,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		eventId?: string
		occurredOn?: Date
	} & ShipmentDeliveredDomainEventAttributes) {
		super({ eventName: ShipmentDeliveredDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.receivedBy = receivedBy
		this.deliveryDate = deliveryDate
	}

	toPrimitives(): ShipmentDeliveredDomainEventAttributes {
		return {
			receivedBy: this.receivedBy,
			deliveryDate: this.deliveryDate
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: ShipmentDeliveredDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, occurredOn, eventId } = params
		return new ShipmentDeliveredDomainEvent({
			aggregateId,
			...attributes,
			eventId,
			occurredOn
		})
	}
}
