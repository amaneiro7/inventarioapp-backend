import { DomainEvent } from '../../../../Shared/domain/event/DomainEvent'

type ShipmentStatusChangedDomainEventAttributes = {
	readonly oldStatus: string
	readonly newStatus: string
}

export class ShipmentStatusChangedDomainEvent extends DomainEvent {
	static readonly EVENT_NAME = 'shipment.status.changed'

	readonly oldStatus: string
	readonly newStatus: string

	constructor({
		aggregateId,
		oldStatus,
		newStatus,
		eventId,
		occurredOn
	}: {
		aggregateId: string
		eventId?: string
		occurredOn?: Date
	} & ShipmentStatusChangedDomainEventAttributes) {
		super({ eventName: ShipmentStatusChangedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn })
		this.oldStatus = oldStatus
		this.newStatus = newStatus
	}

	toPrimitives(): ShipmentStatusChangedDomainEventAttributes {
		const { oldStatus, newStatus } = this
		return {
			oldStatus,
			newStatus
		}
	}

	static fromPrimitives(params: {
		aggregateId: string
		attributes: ShipmentStatusChangedDomainEventAttributes
		eventId: string
		occurredOn: Date
	}): DomainEvent {
		const { aggregateId, attributes, occurredOn, eventId } = params
		return new ShipmentStatusChangedDomainEvent({
			aggregateId,
			...attributes,
			eventId,
			occurredOn
		})
	}
}
