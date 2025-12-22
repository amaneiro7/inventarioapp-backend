import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type ShipmentCancelledDomainEventAttributes = {
	readonly reason: string
}

export class ShipmentCancelledDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'shipment.cancelled'
	readonly reason: string

	constructor({
		aggregateId,
		reason,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		eventId?: string
		occurredOn?: Date
	} & ShipmentCancelledDomainEventAttributes) {
		super({ eventName: ShipmentCancelledDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.reason = reason
	}

	toPrimitives(): ShipmentCancelledDomainEventAttributes {
		return {
			reason: this.reason
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: ShipmentCancelledDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, occurredOn, eventId } = params
		return new ShipmentCancelledDomainEvent({
			aggregateId,
			...attributes,
			eventId,
			occurredOn
		})
	}
}
